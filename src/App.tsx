import './styles/App.css'
import SideNav from './dashboard/sidenav'
import { Outlet, useNavigate } from 'react-router-dom'
import WarningCard from './speed_warning/warning_card'
import { useEffect, useState } from 'react'
function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!loggedIn) navigate('/login', { replace: true })
    else navigate('/dashboard', { replace: true })
  }, [loggedIn, navigate])
  return (
    <main className='app_container'>
      <SideNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={{ loggedIn, setLoggedIn }} />
      <WarningCard />
    </main>
  )
}

export default App