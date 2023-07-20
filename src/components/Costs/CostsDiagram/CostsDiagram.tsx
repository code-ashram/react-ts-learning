import Diagram from "../../Diagram/Diagram.tsx";
import {FC} from "react";
import {Item} from "../../../data.tsx";

type MonthSet = {
    label: string,
    value: number,
}

type Props = {
    costs: Array<Item>
}

const CostsDiagram: FC<Props> = ({costs}) => {
    const monthsSet: Array<MonthSet> = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    const dataSet = costs.reduce((acc, cost) => {
        acc[cost.date.getMonth()].value += cost.amount
        return acc
    }, monthsSet)

    console.log(dataSet)

    return <Diagram dataSets={dataSet}/>
}

export default CostsDiagram
