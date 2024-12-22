import { FaCarCrash } from 'react-icons/fa'
import '../../styles/dashboard/content.css'
import StatCard from './stat_card'
import { SearchBox } from '../search_box'
import ReportTable from '../report_table/report'

const Content = () => {
  return (
    <div className="dashboard-content-container">
      <header className="content-header">
        <div className="content-header-title">
          <h1>IoT Enabled Vehicle Speed Control and Monitoring System</h1>
        </div>
        <SearchBox placeholder="Search for a plate #" background='#FFFFFF' stroke='none' />
      </header>
      <div className="content-stats">
        <StatCard title="Total Speeding" icon={<FaCarCrash />} total={33} stat={10} change="positive" duration="today" />
        <StatCard title="Total Speeding" icon={<FaCarCrash />} total={1893} stat={1} change="negative" duration="this month" />
        <StatCard title="Total Speeding" icon={<FaCarCrash />} total={2500} stat={5} change="positive" duration="this year" />
      </div>
      <ReportTable />
    </div>
  )
}

export default Content