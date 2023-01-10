import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import currency from './Currency';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            Spent so far: {currency}{totalExpenses}
        </div>
    );
};

export default ExpenseTotal;
