import { FC } from 'react'

import Cost from './Cost.tsx'
import { CostItem } from '../../../models/CostItem.ts'

import '../Costs.css'

type Props = {
  source: CostItem[]
}

const CostsList: FC<Props> = ({ source }) => source.length
  ? (
    <ul className="cost-list">
      {source.map(({ id, date, description, amount }) => (
        <Cost
          key={id}
          date={date}
          description={description}
          amount={amount}
        />
      ))}
    </ul>
  )
  : <h2 className="cost-list__fallback">В этом году расходов нет</h2>

export default CostsList
