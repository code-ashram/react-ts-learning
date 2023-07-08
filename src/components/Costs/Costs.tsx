import {FC, useState} from "react";
import CostItem from "./CostItem/CostItem.jsx";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";
import CostsFilter from "./CostFilter/CostsFilter.tsx";
import {currentYear} from "../../utils.ts";

import "./Costs.css"

type Props = {
    source: Item[]
}

const Costs: FC<Props> = ({source}) => {
    const [selectedYear, setSelectedYear] = useState<string>(currentYear)

    const filteredList = source.filter((item) => item.date.getFullYear().toString() === selectedYear)

    const handleChangeYear = (year: string) => {
        setSelectedYear(year)
    }

    const showCostsList = (array: Item[]) => array.map((item) => <CostItem
        key={item.id}
        date={item.date}
        description={item.description}
        amount={item.amount}/>)

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            {showCostsList(selectedYear === "Все расходы" ? source : filteredList)}
        </Card>
    )
}

export default Costs
