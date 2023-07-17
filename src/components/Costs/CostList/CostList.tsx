import {FC} from "react";
import {Item} from "../../../data.tsx";
import CostItem from "../CostItem/CostItem.tsx";

import './CostList.css'

type Props = {
    source: Item[]
}

const CostList: FC<Props> = ({source}) => {
    if (!source.length) {
        return <h2 className="cost-list__fallback">В этом году расходов нет</h2>
    }

    return (
        <ul className="cost-list">
            {source.map((item) => <CostItem
                key={item.id}
                date={item.date}
                description={item.description}
                amount={item.amount}/>)}
        </ul>
    )
}

export default CostList
