import React, { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'

import { useNavigate, useOutletContext } from 'react-router-dom';
import { ButtonContainer, Form, FormContainer, FormLabel, FormLink, FormRow, IconButton, Input, InputData, Label, OuterFormContainer, StyledButton, Underline } from '../ui/form_components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from '../lib/actions';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [showpass, setShowpass] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setLoggedIn } = useOutletContext<{ setLoggedIn: (status: boolean) => void }>();
  const navigate = useNavigate();
  
  const buildSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setSnackbarOpen(true);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      setIsLoading(false);
      return;
    }

    login(email, password).then((response) => {
      if (response) {
        buildSnackbar('Login successful!', 'success');
        setLoggedIn(true);
        navigate('/dashboard', { replace: true });
      } else {
        buildSnackbar('Invalid username/password.', 'error');
      }
    }).catch(() => {
      buildSnackbar('An error occurred. Please try again.', 'error');
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <OuterFormContainer>
      <FormContainer max_width="400px">
        <FormLabel>Login</FormLabel>
        <Form onSubmit={submitHandler}>
          <FormRow>
            <InputData>
              <Input type="text"
                value={email}
                name="email"
                id="email"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <Label htmlFor="email">Email</Label>
              <Underline />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <Input type={showpass ? 'text' : 'password'}
                value={password}
                name="password"
                id="password"
                required
                onChange={e => setPassword(e.target.value)}
              />
              <IconButton type='button' onClick={() => setShowpass(!showpass)}>{showpass ? <FaEye /> : <FaEyeSlash />} </IconButton>
              <Label htmlFor="password">Password</Label>
              <Underline />
            </InputData>
          </FormRow>
          <div style={{ position: 'relative' }}>
            <FormLink to="/forgotpassword">Forgot Password? Reset</FormLink>
          </div>
          <ButtonContainer>
            <StyledButton type="submit" disabled={isLoading}>Login</StyledButton>
          </ButtonContainer>
        </Form>
      </FormContainer>

      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={severity}
          sx={{ width: 'max-content', backgroundColor: 'rgb(230,240,250)', color: 'black' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </OuterFormContainer>
  )
}

export default Login
