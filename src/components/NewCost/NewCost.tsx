import { FC } from 'react'

import CostForm from './parts/CostForm.tsx'
import { CostItem } from '../../models/CostItem.ts'

import './NewCost.css'

type Props = {
  onAddCost: (costData: CostItem) => void
}

const NewCost: FC<Props> = ({ onAddCost }) => {
  const handleSaveCostData = (inputCostData: CostItem) => {
    onAddCost(inputCostData)
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={handleSaveCostData} />
    </div>
  )
}

export default NewCost
