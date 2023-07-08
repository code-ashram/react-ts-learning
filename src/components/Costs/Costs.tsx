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
    const [selectedYear, setSelectedYear] = useState(currentYear)

    const handleChangeYear = (year: number) => {
        setSelectedYear(year)
    }

    const filteredList = source.filter((item) => item.date.getFullYear() === selectedYear)

    const showCostsList = (array: Item[]) => array.map((item) => <CostItem
        key={item.id}
        date={item.date}
        description={item.description}
        amount={item.amount}/>)

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            {showCostsList(selectedYear ? filteredList : source)}
        </Card>
    )
}

export default Costs
