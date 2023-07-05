import CostForm from "./CostForm/CostForm.tsx";
import "./NewCost.css"
import {Item} from "../../data.tsx";
import {FC} from "react";

type Props = {
    onAddCost: (costData: Item) => Item
}

const NewCost: FC<Props> = ({onAddCost}) => {
    const handleSaveCostData = (inputCostData: Item): Item => onAddCost({ ...inputCostData})

    return (
        <div className="new-cost">
            <CostForm onSaveCostData={handleSaveCostData}/>
        </div>
    )
}

export default NewCost
