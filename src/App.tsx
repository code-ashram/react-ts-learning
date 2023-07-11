import data, {Item} from "./data.tsx"
import Costs from "./components/Costs/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.tsx";
import {useState} from "react";

function App() {
    const [costs, setCosts] = useState<Item[]>(data)

    const handleAddCost = (cost: Item) =>
        setCosts(prevCosts => [cost, ...prevCosts])

    const handleFilterList = (year: number | undefined) =>
        setCosts( year ? data.filter((item) => item.date.getFullYear() === year) : data)

    return (
        <div>
            <NewCost onAddCost={handleAddCost}/>
            <Costs source={costs} onSelectYear={handleFilterList}/>
        </div>
    )
}

export default App
