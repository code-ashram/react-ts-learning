import data, {Item} from "./data.tsx"
import Costs from "./components/Costs/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.tsx";

function App() {

    const handleAddCost = (cost: Item): Item => {
        console.log(cost)
    }

    return (
        <div>
            <NewCost onAddCost={handleAddCost}/>
            <Costs source={data}/>
        </div>
    )
}

export default App
