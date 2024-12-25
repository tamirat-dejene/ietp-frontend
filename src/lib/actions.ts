import { ReportSortOption, ReportDataModel } from "./defn";
const API_URL = process.env.API_URL;
const getReportData = async (reportId: string): Promise<ReportDataModel> => {
    const response = await fetch(`${API_URL}/reports/${reportId}`);
    return response.json();
};

const getReports = async (searchQuery: string, sortOption: ReportSortOption): Promise<ReportDataModel[]> => {
    console.log(`${API_URL}/reports?query=${searchQuery}&sortby=${sortOption}`);
    const response = await fetch(`${API_URL}/reports?query=${searchQuery}&sortby=${sortOption}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}


export { getReportData, getReports };
    