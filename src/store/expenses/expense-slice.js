const {createSlice} = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        income: 2000,
        expenseList: [],
        countActionPerformed: 0
    },
    reducers: {
        addExpenseAction: (currentExpense, action) => {
            currentExpense.expenseList.push(action.payload)
        },
        setIncomeAction: (currentSlice, action) => {
            currentSlice.income = action.payload
        },
        incrementActionPerformed: (currentSlice, action) => {
            currentSlice.countActionPerformed ++;
        }
    }
});

export const {addExpenseAction, setIncomeAction, incrementActionPerformed} = expenseSlice.actions