import {FC} from "react";
import CostForm from "./CostForm/CostForm.tsx";
import {Item} from "../../data.tsx";
import "./NewCost.css"

type Props = {
    onAddCost: (costData: Item) => void
}

const NewCost: FC<Props> = ({onAddCost}) => {
    const handleSaveCostData = (inputCostData: Item): void => onAddCost(inputCostData)

    return (
        <div className="new-cost">
            <CostForm onSaveCostData={handleSaveCostData}/>
        </div>
    )
}

export default NewCost
