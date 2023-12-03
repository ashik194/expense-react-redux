const {createSlice} = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        income: 2000,
        expenseList: []
    },
    reducers: {
        addExpenseAction: (currentExpense, action) => {
            currentExpense.expenseList.push(action.payload)
        },
        setIncomeAction: (currentSlice, action) => {
            currentSlice.income = action.payload
        }
    }
});

export const {addExpenseAction, setIncomeAction} = expenseSlice.actions