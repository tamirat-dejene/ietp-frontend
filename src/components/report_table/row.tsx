
import { TableDataModel } from '../../types/defn'

export const TableRow = ({ data }: { data: TableDataModel }) => {
    return (<tr>
        <td>{data.driver_name}</td>
        <td>{data.driver_licence}</td>
        <td>{data.car_plate}</td>
        <td>{data.speed}</td>
        <td>{data.penalty_count}</td>
        <td>{data.city}</td>
        <td>{data.damage}</td>
    </tr>)
}
