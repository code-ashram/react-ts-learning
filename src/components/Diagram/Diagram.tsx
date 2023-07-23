import { FC } from 'react'

import DiagramBar from './parts/DiagramBar.tsx'
import { DataSet } from '../../models/DataSet.ts'

import './Diagram.css'

type Props = {
  dataSets: DataSet[]
}

const Diagram: FC<Props> = ({ dataSets }) => (
  <div className="diagram">
    {dataSets.map(({ value, label }) => (
      <DiagramBar
        key={label}
        value={value}
        maxValue={Math.max(...dataSets.map(({ value }) => value))}
        label={label}
      />
    ))}
  </div>
)

export default Diagram
