import { FC } from 'react'

import Card from '../../Card'
import CostDate from './CostDate.tsx'

import '../Costs.css'

type Props = {
  date: Date,
  description: string,
  amount: number,
}

const Cost: FC<Props> = ({ date, description, amount }) => (
  <li>
    <Card className="cost-item">
      <CostDate date={date} />

      <div className="cost-item__description">
        <h2>{description}</h2>

        <p className="cost-item__price">{amount} $</p>
      </div>
    </Card>
  </li>
)

export default Cost
