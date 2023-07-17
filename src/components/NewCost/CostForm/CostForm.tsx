import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Item} from "../../../data.tsx";
import {today} from "../../../utils.ts";
import './CostForm.css'

type Props = {
    onSaveCostData: (costData: Item) => void
}

const CostForm: FC<Props> = ({onSaveCostData}) => {
    const [name, setName] = useState<string>('')
    const [amount, setAmount] = useState<number>(0.01)
    const [date, setDate] = useState<string>(today)
    const [showMore, setShowMore] = useState<boolean>(false)

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)

    const handleMoreClick = () => {
        setShowMore(!showMore);
    }

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault()

        const costData: Item = {
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

    return (
        showMore
            ? <form onSubmit={handleSubmitForm}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label htmlFor="costName">Название</label>
                        <input type="text" value={name} placeholder='Введите название расхода' required
                               onChange={handleNameChange}
                               id="costName"/>
                    </div>
                    <div className="new-cost__control">
                        <label htmlFor="costAmount">Сумма</label>
                        <input type="number" id="costAmount" min="0.01" step="0.01" value={amount}
                               onChange={handleAmountChange}/>
                    </div>
                    <div className="new-cost__control">
                        <label htmlFor="costDate">Дата</label>
                        <input type="date" id="costDate" min="2019-01-01" value={date} max={date}
                               onChange={handleDateChange}/>
                    </div>
                    <div className="new-cost__actions">
                        <button type="submit">Добавить расход</button>
                        <button onClick={handleMoreClick}>Отмена</button>
                    </div>
                </div>
            </form>
            : <div className="new-cost__actions">
                <button className="new-cost__add-btn" onClick={handleMoreClick}>Добавить новый расход</button>
            </div>
    )
}
export default CostForm
