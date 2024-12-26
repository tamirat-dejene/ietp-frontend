import { useEffect, useState } from 'react';
import '../../styles/report.css';
import PageButton from '../../ui/page_button';
import { SearchBox } from '../../ui/search_box';
import { TableRow } from "./row";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ReportSortOption, ReportDataModel } from '../../lib/defn';
import { getReports } from '../../lib/actions';

const caluclatePage = (page: number, data: ReportDataModel[]) => {
    const start = (page - 1) * 4;
    const end = start + 4;
    return data.slice(start, end);
}
const ReportTable = ({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (arg0: string) => void }) => {
    const [table_data, setTableData] = useState<ReportDataModel[]>([]);
    const [sortOption, setSortOption] = useState<ReportSortOption>('speed');
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const debouncer = setTimeout(() => {
            setIsFetching(true);
            getReports(searchQuery, sortOption).then((data) => {
                setTableData(data)
                setTotalPages(Math.ceil(table_data.length / 4));
                setIsFetching(false);
                console.log("Fetching data");
            });
        }, 1000);

        return () => clearTimeout(debouncer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, sortOption]);

    return (<div className="report_table-container">
        <div className="report_header">
            <div className="report_header_title">
                <h2>Latest report</h2>
                <h3>Speeding trend</h3>
            </div>
            <div className="report_header-filter">
                <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Search for a plate #" background='#F9FBFF' stroke="1px solid #E7E7E7" />
                <div className="report_header-sort">
                    <label htmlFor="sort_by">Sort by:</label>
                    <select name="sort_by" id="sort_by" onChange={(e) => setSortOption(e.target.value as ReportSortOption)}>
                        <option value="penalty">Penalty Count</option>
                        <option value="city">City</option>
                        <option value="date">Date</option>
                        <option value="speed">Speed</option>
                    </select>
                </div>
            </div>
        </div>
        {isFetching && <div style={{height: "75%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>loading...</div>}
        {!isFetching && <>
            <div className="report_table">
                <table>
                    <thead>
                        <tr><th>Driver's name</th><th>Driver's Licence #</th><th>Car Plate #</th><th>Speed</th><th>Penalty count</th><th>City</th><th>Date</th></tr>
                    </thead>
                    <tbody>
                        {caluclatePage(activePage, table_data).map((data, index) => (<TableRow key={index} data={data} />))}
                    </tbody>
                </table>
            </div>
            <div className="report_table-pagination">
                <p>Showing data 1 to {caluclatePage(activePage, table_data).length} of {Math.ceil(table_data.length / 4) >= 1000 ? `${Math.floor(table_data.length / 4) / 1000}K` : Math.ceil(table_data.length / 4)} entries</p>
                <div className="report_table-pagination-buttons">
                    <PageButton
                        disabled={activePage === 1}
                        isActive={false}
                        icon={<FaArrowLeft />}
                        onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
                        pageNum={''}
                    />
                    {activePage > 2 && (
                        <>
                            <PageButton isActive={false} pageNum={1} onClick={() => setActivePage(1)} />
                            <span>...</span>
                        </>
                    )}
                    {activePage > 1 && (
                        <PageButton
                            isActive={false}
                            pageNum={activePage - 1}
                            onClick={() => setActivePage(activePage - 1)}
                        />
                    )}
                    <PageButton isActive={true} pageNum={activePage} />
                    {activePage < totalPages && (
                        <PageButton
                            isActive={false}
                            pageNum={activePage + 1}
                            onClick={() => setActivePage(activePage + 1)}
                        />
                    )}
                    {activePage < totalPages - 1 && (
                        <>
                            <span>...</span>
                            <PageButton isActive={false} pageNum={totalPages} onClick={() => setActivePage(totalPages)} />
                        </>
                    )}
                    <PageButton
                        disabled={activePage === totalPages}
                        isActive={false}
                        icon={<FaArrowRight />}
                        pageNum={''}
                        onClick={() => setActivePage(prev => Math.min(prev + 1, totalPages))}
                    />
                </div>
            </div>
        </>}
    </div>
    )
}


export default ReportTable