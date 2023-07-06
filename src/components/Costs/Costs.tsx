import {FC, useState} from "react";
import CostItem from "./CostItem/CostItem.jsx";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";

import "./Costs.css"
import CostsFilter from "./CostFilter/CostsFilter.tsx";
import {currentYear} from "../../utils.ts";

type Props = {
    source: Item[]
}

const getCurrentYearCosts = (array: Item[], year: number) => array.filter((item) => item.date.getFullYear() === year)

const Costs: FC<Props> = ({source}) => {
    const [selectedYear, setSelectedYear] = useState<number>(currentYear)
    const [costsList, setCostsList] = useState<Item[]>(getCurrentYearCosts(source, currentYear))
    const showCostsList = (array: Item[]) => array.map((item) => <CostItem
        key={item.id}
        date={item.date}
        description={item.description}
        amount={item.amount}/>)

    const handleChangeYear = (year: number) => {
        setSelectedYear(year)
        setCostsList(
            source.filter((item) =>
            item.date.getFullYear() === year))
    }

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            {showCostsList(selectedYear ? costsList : source)}
        </Card>
    )
}

export default Costs
