import {FC, useState} from "react";
import {Item} from "../../data.tsx";
import Card from "../Card/Card.tsx";
import CostsFilter from "./CostFilter/CostsFilter.tsx";
import CostList from "./CostList";

import "./Costs.css"

type Props = {
    source: Item[]
    onSelectYear: (year: number | undefined) => void
}

const Costs: FC<Props> = ({source, onSelectYear}) => {
    const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined)

    const handleChangeYear = (chosenYear: number | undefined): void => {
        onSelectYear(chosenYear)
        setSelectedYear(chosenYear)
    }

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={handleChangeYear}/>
            <CostList source={source}/>
        </Card>
    )
}

export default Costs


