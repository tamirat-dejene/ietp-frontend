import './styles/App.css'
import SideNav from './dashboard/sidenav'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <main className='app_container'>
      <SideNav />
      <Outlet />
    </main>
  )
}

export default App