import CostDate from "../CostDate/CostDate.jsx";
import {FC} from "react";
import Card from "../Card/Card.tsx";
import './CostItem.css'

type Props = {
    date: Date,
    description: string,
    amount: number,
}

const CostItem: FC<Props> = ({date, description, amount}) => (
    <Card className="cost-item">
        <CostDate date={date}/>
        <div className="cost-item__description">
            <h2>{description}</h2>
            <p className="cost-item__price">{amount} $</p>
        </div>
    </Card>
)

export default CostItem
