import { ChangeEvent, FC } from 'react'

import { generateFilteredYears } from '../utils.ts'

import '../Costs.css'

type Props = {
  year: number | undefined,
  onChangeYear: (value: number | undefined) => void
}

const years = generateFilteredYears()

const CostsFilter: FC<Props> = ({ year, onChangeYear }) => {

  const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeYear(e.target.value === 'All' ? undefined : Number(e.target.value))
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор по году</label>

        <select value={year} onChange={handleChangeYear}>
          {years?.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CostsFilter
