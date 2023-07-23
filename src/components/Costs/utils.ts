import { CostItem } from '../../models/CostItem.ts'
import { DataSet } from '../../models/DataSet.ts'

type FilteredYears = {
  label: string | 'All'
  value: number | undefined
}

export const generateFilteredYears = (): FilteredYears[] => new Array((new Date().getFullYear() - 2019) + 1)
  .fill(null)
  .map((_, index) => index
    ? { label: `${2018 + index}`, value: 2018 + index }
    : { label: 'All', value: undefined })

export const generateDataSet = (costs: CostItem[]): DataSet[] => {
  const monthsSet: DataSet[] = new Array(12).fill(null).map((_, index) => ({
    label: new Date(2000, index).toLocaleString('default', { month: 'short' }),
    value: 0
  }))

  return costs.reduce((acc, cost) => {
    acc[cost.date.getMonth()].value += cost.amount
    return acc
  }, monthsSet)
}
