import {FC, useState} from "react";
import CostItem from "./CostItem/CostItem.jsx";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";

import "./Costs.css"
import CostsFilter from "./CostFilter/CostsFilter.tsx";

type Props = {
    source: Item[]
}

const Costs: FC<Props> = ({source}) => {
    const [selectedYear, setSelectedYear] = useState('2021')

    const handleChangeYear = (year: string) => setSelectedYear(year)

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            {source.map((item) => <CostItem
                key={item.id}
                date={item.date}
                description={item.description}
                amount={Number(item.amount)}/>)}
        </Card>
    )
}

export default Costs
