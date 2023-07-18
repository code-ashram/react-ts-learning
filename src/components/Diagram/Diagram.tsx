import {FC} from "react";
import DiagramBar from "./DiagramBar/DiagramBar.tsx";

import './Diagram.css'

export type DataSet = {
    value: number,
    label: string,
}

type Props = {
    dataSets: Array<DataSet>
}

const Diagram: FC<Props> = ({dataSets}) => {
    const dataSetsValue = dataSets.map(({value}) => value)
    const maxMonthCosts = Math.max(...dataSetsValue)

    return <div className="diagram">
        {dataSets.map(({value, label}) => <DiagramBar
            key={label}
            value={value}
            maxValue={maxMonthCosts}
            label={label}/>)}
    </div>
}

export default Diagram
