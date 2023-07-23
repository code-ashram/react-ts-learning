import { FC } from 'react'

import '../Costs.css'

type Props = {
  date: Date
}

const costDate: FC<Props> = ({ date }) => (
  <div className="cost-date">
    <div className="cost-date__year">{date.toLocaleString('ru-RU', { month: 'long' })}</div>

    <div className="cost-date__month">{date.getFullYear()}</div>

    <div className="cost-date__day">{date.toLocaleString('ru-RU', { day: '2-digit' })}</div>
  </div>
)

export default costDate
