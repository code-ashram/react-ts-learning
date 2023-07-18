import {FC} from "react";
import './DiagramBar.css'

type Props = {
    label: string,
    value: number,
    maxValue: number
}

const DiagramBar: FC<Props> = ({label, value, maxValue}) => {
    let barFillHeight = "0%";

    if (maxValue > 0) {
        barFillHeight = Math.round(value / maxValue * 100) + '%'
    }

    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                <div className="diagram-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="diagram-bar__label">{label}</div>
        </div>
    )
}

export default DiagramBar
