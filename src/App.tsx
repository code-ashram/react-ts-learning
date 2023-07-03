import data from "./data.tsx"
import Costs from "./components/Costs/Costs.jsx";

function App() {

    return (
        <>
            <h1>Список расходов</h1>
            <Costs source={data}/>
        </>
    )
}

export default App
