import data, {Item} from "./data.tsx"
import Costs from "./components/Costs/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.tsx";
import {useState} from "react";

function App() {
    const [costs, setCosts] = useState<Item[]>(data)
    const [filteredCosts, setFilteredCosts] = useState(costs)

    const handleAddCost = (cost: Item) => {
        setCosts(prevCosts => [cost, ...prevCosts])
        setFilteredCosts(prevCosts => [cost, ...prevCosts])
    }


    const handleFilterList = (year: number | undefined) =>
        setFilteredCosts( year ? costs.filter((item) => item.date.getFullYear() === year) : costs)

    return (
        <div>
            <NewCost onAddCost={handleAddCost}/>
            <Costs source={filteredCosts} onSelectYear={handleFilterList}/>
        </div>
    )
}

export default App
