import {FC} from "react";
import CostItem from "../CostItem/CostItem.jsx";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";

import "./Costs.css"

type Props = {
    source: Item[]
}

const Costs: FC<Props> = ({source}) => (
    <Card className="costs">
        {source.map((item) => <CostItem
            key={item.id}
            date={item.date}
            description={item.description}
            amount={item.amount}/>)}
    </Card>
)

export default Costs
