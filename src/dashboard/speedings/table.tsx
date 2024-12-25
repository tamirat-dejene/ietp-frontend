import { table_data } from '../../model/table_data';
import '../../styles/report.css';
import PageButton from '../../ui/page_button';
import { SearchBox } from '../../ui/search_box';
import { TableRow } from "./row";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ReportTable = () => {
    return (
        <div className="report_table-container">
            <div className="report_header">
                <div className="report_header_title">
                    <h2>Latest report</h2>
                    <h3>Speeding trend</h3>
                </div>
                <div className="report_header-filter">
                    <SearchBox placeholder="Search for a plate #" background='#F9FBFF' stroke="1px solid #E7E7E7" />
                    <div className="report_header-sort">
                        <label htmlFor="sort_by">Sort by:</label>
                        <select name="sort_by" id="sort_by">
                            <option value="penalty_count">Penalty Count</option>
                            <option value="city">City</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="report_table">
                <table>
                    <thead>
                        <tr><th>Driver's name</th><th>Driver's Licence #</th><th>Car Plate #</th><th>Speed</th><th>Penalty count</th><th>City</th><th>Date</th></tr>
                    </thead>
                    <tbody>
                        {table_data.map((data, index) => (<TableRow key={index} data={data} />))}
                    </tbody>
                </table>
            </div>

            <div className="report_table-pagination">
                <p>Showing data 1 to 4 of  8K entries</p>
                <div className="report_table-pagination-buttons">
                    <PageButton isActive={false} icon={<FaArrowLeft color="" />} pageNum={''}/>
                    <PageButton isActive={true} pageNum={1} />
                    <PageButton isActive={false} pageNum={2} />
                    <PageButton isActive={false} pageNum={3} />
                    <PageButton isActive={false} pageNum="..." />
                    <PageButton isActive={false} pageNum="8K" />
                    <PageButton isActive={false} icon={<FaArrowRight />} pageNum="" />
                </div>
            </div>
        </div>
    )
}


export default ReportTable