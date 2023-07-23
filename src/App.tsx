import { FC, useState } from 'react'

import Costs from './components/Costs/Costs.jsx'
import NewCost from './components/NewCost/NewCost.tsx'
import { data } from './constants/data.tsx'
import { CostItem } from './models/CostItem.ts'

const App: FC = () => {
  const [costs, setCosts] = useState<CostItem[]>(data)
  const [filteredCosts, setFilteredCosts] = useState<CostItem[]>(costs)

  const handleAddCost = (cost: CostItem) => {
    setCosts(prevCosts => [cost, ...prevCosts])
    setFilteredCosts(prevFilteredCosts => [cost, ...prevFilteredCosts])
  }

  const handleFilterList = (year: number | undefined) => {
    setFilteredCosts(year
      ? costs.filter((item) => item.date.getFullYear() === year)
      : costs)
  }

  return (
    <div>
      <NewCost onAddCost={handleAddCost} />

      <Costs source={filteredCosts} onSelectYear={handleFilterList} />
    </div>
  )
}

export default App
