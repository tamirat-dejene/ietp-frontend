
import { ReportDataModel } from '../../lib/defn'

export const TableRow = ({ data }: { data: ReportDataModel }) => {
    return (<tr>
        <td>{data.driver_name}</td>
        <td>{data.driver_licence}</td>
        <td>{data.car_plate}</td>
        <td>{data.speed}</td>
        <td>{data.penalty_count}</td>
        <td>{data.city}</td>
        <td>{
            new Date(data.report_date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })
        }</td>
    </tr>)
}
