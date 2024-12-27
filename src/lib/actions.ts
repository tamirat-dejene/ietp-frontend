import { ReportSortOption, ReportDataModel } from "./defn";
const API_URL = process.env.API_URL;
const getReportData = async (reportId: string): Promise<ReportDataModel> => {
    const response = await fetch(`${API_URL}/reports/${reportId}`);
    return response.json();
};

const getReports = async (searchQuery: string, sortOption: ReportSortOption): Promise<ReportDataModel[]> => {
    const response = await fetch(`${API_URL}/reports?query=${searchQuery}&sortby=${sortOption}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

const login = async (email: string, password: string): Promise<boolean> => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
        localStorage.setItem('token', JSON.stringify(response.headers.get('Authorization')));
        return true;
    }
    return false;
}

const recordReport = async (record: ReportDataModel): Promise<number> => {
    return fetch(`${API_URL}/reports`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    }).then(async (response) => {
        if (response.status === 200) {
            return 200;
        } else {
            return 500;
        }
    }).catch((error) => {
        console.error('Error:', error);
        return 500;
    });
}

export { getReportData, getReports, login, recordReport };
    