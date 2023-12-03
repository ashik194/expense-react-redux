import React from 'react'
import { List } from '../components/List/List'
import { useSelector } from 'react-redux'

function ExpenseList() {
    const expenseList = useSelector((store) => store.EXPENSE.expenseList)
    return <List items={expenseList} />
}

export default ExpenseList