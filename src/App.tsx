import data, {Item} from "./data.tsx"
import Costs from "./components/Costs/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.tsx";
import {useState} from "react";

function App() {

    const [costs, setCosts] = useState<Item[]>(data)

    const handleAddCost = (cost: Item) => setCosts(prevCosts => [cost, ...prevCosts])

    return (
        <div>
            <NewCost onAddCost={handleAddCost}/>
            <Costs source={costs}/>
        </div>
    )
}

export default App
