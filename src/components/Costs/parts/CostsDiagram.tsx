import { FC } from 'react'

import Diagram from '../../Diagram'
import { CostItem } from '../../../models/CostItem.ts'
import { generateDataSet } from '../utils.ts'

type Props = {
  costs: CostItem[]
}

const CostsDiagram: FC<Props> = ({ costs }) => {
  const dataSet = generateDataSet(costs)

  return <Diagram dataSets={dataSet} />
}

export default CostsDiagram
