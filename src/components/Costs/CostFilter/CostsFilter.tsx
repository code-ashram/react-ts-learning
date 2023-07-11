import "./CostsFilter.css";
import {ChangeEvent, FC} from "react";

type Props = {
    year: number | undefined,
    onChangeYear: (value: number | undefined) => void
}

const CostsFilter: FC<Props> = ({year, onChangeYear}) => {
    const yearChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeYear(e.target.value === 'All' ? undefined : Number(e.target.value))
    }

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выбор по году</label>
                <select value={year} onChange={yearChangeHandler}>
                    <option value={undefined}>All</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;
