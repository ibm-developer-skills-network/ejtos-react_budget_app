import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContext';

const Remaining = (props) => {
    const {expenses, budget} = useContext(AppContext);
    const [remainingBudget, setRemainingBudget] = useState(budget);

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => {
          return (total = total + item.cost);
        }, 0);
        setRemainingBudget(budget - totalExpenses);
    }, [expenses, budget]);

    const expensesAsDependency = expenses.map(expense => expense.cost);

    useEffect(() => {
      const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
      }, 0);
      setRemainingBudget(budget - totalExpenses);
    }, [expenses, budget, ...expensesAsDependency]);

    const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {props.selectedCurrency} {remainingBudget}</span>
        </div>
    );
}

export default Remaining;