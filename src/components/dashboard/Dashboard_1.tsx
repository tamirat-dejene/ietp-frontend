import '../../styles/dashboard/dashboard_1.css'
import Content from './content'

import SideNav from './sidenav'
const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <SideNav />
      <Content />
    </div>
  );
}

export default Dashboard