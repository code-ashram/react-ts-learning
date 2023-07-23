import { FC } from 'react'

import '../Diagram.css'

type Props = {
  label: string,
  value: number,
  maxValue: number
}

const DiagramBar: FC<Props> = ({ label, value, maxValue }) => (
  <div className="diagram-bar">
    <div className="diagram-bar__inner">
      <div
        className="diagram-bar__fill"
        style={{ height: `${maxValue ? Math.round(value / maxValue * 100) : 0}%` }}
      />
    </div>

    <div className="diagram-bar__label">{label}</div>
  </div>
)

export default DiagramBar
