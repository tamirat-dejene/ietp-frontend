import { SearchBox } from "../search_box"
import '../../styles/report.css';
import { table_data } from '../../model/table_data';
import { TableRow } from "./row";
import PageButton from "../page_button";
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
                        <tr><th>Driver's name</th><th>Driver's Licence #</th><th>Car Plate #</th><th>Speed</th><th>Penalty count</th><th>City</th><th>Damage caused</th></tr>
                    </thead>
                    <tbody>
                        {table_data.map((data, index) => (<TableRow key={index} data={data} />))}
                    </tbody>
                </table>
            </div>

            <div className="report_table-pagination">
                <p>Showing data 1 to 4 of  8K entries</p>
                <div className="report_table-pagination-buttons">
                    <PageButton isActive={true} icon={<FaArrowLeft color="" />} pageNum={''}/>
                    <PageButton isActive={false} pageNum={1} />
                    <PageButton isActive={false} pageNum={2} />
                    <PageButton isActive={false} pageNum={3} />
                    <PageButton isActive={false} pageNum="..." />
                    <PageButton isActive={false} pageNum="8K" />
                    <PageButton isActive={true} icon={<FaArrowRight />} pageNum="" />
                </div>
            </div>
        </div>
    )
}


export default ReportTable