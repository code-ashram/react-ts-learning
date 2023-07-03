export type Item = {
    id: number,
    date: Date,
    description: string,
    amount: number,
}

const data: Item[] = [
    {
        id: 1,
        date: new Date(2020, 6, 10),
        description: 'LTD V-50',
        amount: 330.88
    },
    {
        id: 2,
        date: new Date(2021, 7, 11),
        description: 'JBL 305p MK2',
        amount: 666.66
    },
    {
        id: 3,
        date: new Date(2022, 8, 12),
        description: 'Yamaha THR-2',
        amount: 500.14
    },
]

export default data
