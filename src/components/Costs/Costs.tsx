import {FC, useEffect, useState} from "react";
import CostItem from "./CostItem/CostItem.jsx";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";
import CostsFilter from "./CostFilter/CostsFilter.tsx";
import {currentYear} from "../../utils.ts";

import "./Costs.css"

type Props = {
    source: Item[]
}

const getCurrentYearCosts = (array: Item[], year: number) => array.filter((item) => item.date.getFullYear() === year)

const Costs: FC<Props> = ({source}) => {
    const [selectedYear, setSelectedYear] = useState<number | undefined>(currentYear)
    const [costsList, setCostsList] = useState<Item[]>(getCurrentYearCosts(source, currentYear))
    useEffect(() => {
        console.table(costsList)
    }, [costsList])

    const handleChangeYear = (year: number | undefined):void => {
        setSelectedYear(year)
        setCostsList(year ? source.filter((item) => item.date.getFullYear() === year) : source)
    }

    // const filteredList = source.filter((item) => item.date.getFullYear() === selectedYear)

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            {costsList.length
                ? costsList.map((item) => <CostItem
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    amount={item.amount}/>)
                : <p>Нет расходов</p>
            }
        </Card>
    )
}

export default Costs


