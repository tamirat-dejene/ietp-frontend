import React, { useEffect, useState } from 'react'
import {Snackbar,Alert,linkClasses} from '@mui/material'

import '../styles/login/login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('');
  const [toggle,setToggle] = useState('password');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoading(true);
      buildSnackbar('Authenticating...', 'info');
    }
  }, []);
  const validate = (): boolean => {
    let error = '';
    if (!email || !password) {
      error = 'Please fill in all fields.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      error = 'Invalid email address.';
    }
    if(password.length <8){
      error = 'Password must be at least 8 characters long.';
      return false;
    }
    if (error) {
      buildSnackbar(error, 'error');
      return false;
    }
    return true;
  };
  const buildSnackbar = (message: string, severity: 'success' | 'error' | 'info') => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setSnackbarOpen(true);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.IETP_WEB_URL}/IETP/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        buildSnackbar('Unable to login', 'error');
        setIsLoading(false);
        return;
      }

      const result = await response.json();
      if (result.status === 'fail') {
        buildSnackbar(result.data.message, 'error');
        setIsLoading(false);
        return;
      }

      // const { name, url, token } = result.data;
      // dispatch({ type: SET_USER, payload: { name, url } });

      // localStorage.setItem('token', token);
      // localStorage.setItem('user', JSON.stringify({ url, name }));

      buildSnackbar('Login successful!', 'success');
      setTimeout(() => navigate('/dashboard'), 2000);

    } catch (error) {
      console.error('Error:', error);
      buildSnackbar('Error: ' + error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={submitHandler}>
        <div className="email">
          <label htmlFor="email" className="email">Email: </label>
          <input type="text" name="email" id="email" required value={email}
          onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="password">
          <label htmlFor="password" className="password">Password: </label>
          <input type={toggle} name="password" id="password" required value={password}
          onChange={(e)=>setPassword(e.target.value)} />
          <div className="showPassword">
            <input type="checkbox" id="showPassword" name="showPassword" 
            onClick={() => toggle === 'password' ? setToggle('text') : setToggle('password')}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
        </div>
        <div className="forget">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="submit">
          <input type="submit" value='Login' />
        </div>
      </form>
      <Snackbar
        open={snackbarOpen}
        onClose={closeSnackbar}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={severity}
          sx={{ width: 'max-content', backgroundColor: 'rgb(230,240,250)', color: 'black' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Login
