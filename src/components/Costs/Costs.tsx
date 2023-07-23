import { FC, useState } from 'react'

import Card from '../Card'
import CostsFilter from './parts/CostsFilter.tsx'
import CostsList from './parts/CostsList.tsx'
import CostsDiagram from './parts/CostsDiagram.tsx'
import { CostItem } from '../../models/CostItem.ts'

import './Costs.css'

type Props = {
  source: CostItem[]
  onSelectYear: (year: number | undefined) => void
}

const Costs: FC<Props> = ({ source, onSelectYear }) => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined)

  const handleChangeYear = (chosenYear: number | undefined) => {
    onSelectYear(chosenYear)
    setSelectedYear(chosenYear)
  }

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={handleChangeYear} />

      <CostsDiagram costs={source} />

      <CostsList source={source} />
    </Card>
  )
}

export default Costs


