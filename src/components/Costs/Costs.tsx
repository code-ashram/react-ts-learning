import {FC, useState} from "react";
import CostItem from "./CostItem/CostItem.jsx";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";
import CostsFilter from "./CostFilter/CostsFilter.tsx";
import {currentYear} from "../../utils.ts";

import "./Costs.css"

type Props = {
    source: Item[]
    onSelectYear: (year: number | undefined) => void
}

const Costs: FC<Props> = ({source, onSelectYear }) => {
    const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined)

    const handleChangeYear = (chosenYear: number | undefined):void => {
        onSelectYear(chosenYear)
        setSelectedYear(chosenYear)
    }

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            {source.length
                ? source.map((item) => <CostItem
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


