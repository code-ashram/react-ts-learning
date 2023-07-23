import { ChangeEvent, FC, FormEvent, useState } from 'react'

import { CostItem } from '../../../models/CostItem.ts'
import { today } from '../utils.ts'

import '../NewCost.css'

type Props = {
  onSaveCostData: (costData: CostItem) => void
}

const CostForm: FC<Props> = ({ onSaveCostData }) => {
  const [name, setName] = useState<string>('')
  const [amount, setAmount] = useState<number>(0.01)
  const [date, setDate] = useState<string>(today)
  const [showMore, setShowMore] = useState<boolean>(false)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const handleClickMore = () => {
    setShowMore(!showMore)
  }

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()

    const costData: CostItem = {
      id: crypto.randomUUID(),
      description: name,
      amount: Number(amount),
      date: new Date(date)
    }

    onSaveCostData(costData)

    setName('')
    setAmount(0.01)
    setDate(today)
  }

  return showMore
    ? (
      <form onSubmit={handleSubmitForm}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label htmlFor="costName">Название</label>

            <input
              id="costName"
              type="text"
              value={name}
              placeholder="Введите название расхода"
              onChange={handleChangeName}
              required
            />
          </div>

          <div className="new-cost__control">
            <label htmlFor="costAmount">Сумма</label>

            <input
              id="costAmount"
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={handleChangeAmount}
            />
          </div>

          <div className="new-cost__control">
            <label htmlFor="costDate">Дата</label>

            <input
              id="costDate"
              type="date"
              min="2019-01-01"
              value={date}
              max={date}
              onChange={handleChangeDate}
            />
          </div>

          <div className="new-cost__actions">
            <button type="submit">Добавить расход</button>

            <button onClick={handleClickMore}>Отмена</button>
          </div>
        </div>
      </form>
    ) : (
      <div className="new-cost__actions">
        <button className="new-cost__add-btn" onClick={handleClickMore}>Добавить новый расход</button>
      </div>
    )
}

export default CostForm
