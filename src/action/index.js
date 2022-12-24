export const ChangeBudgetAction = (newBudget) => {
    return {
        type: 'CHANGE BUDGET',
        newBudget
    }
}

export const ChangeCurrencyAction = (newCurrencyKey) => {
    return {
    type: "CHANGE CURRENCY",
    newCurrencyKey
    };
};

export const AddExpenseAction = (dept, alloc) => {
    return {
        type: 'ADD EXPENSE',
        department: dept,
        allocation: alloc
    }
}

export const SubtractExpenseAction = (dept, alloc) => {
    return {
        type: 'SUBTRACT EXPENSE',
        department: dept,
        allocation: alloc
    }
}

export const DeleteExpenseAction = (id) => {
    return {
        type: 'DELETE EXPENSE',
        id
    }
}

export const IncreaseByTenAction = (id) => {
    return {
        type: 'INCREASE BY TEN',
        id
    }
}

export const DecreaseByTenAction = (id) => {
    return {
        type: 'DECREASE BY TEN',
        id
    }
}