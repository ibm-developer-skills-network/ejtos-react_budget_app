import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpensesTotal = () => {
    const { expenses }= useContext(AppContext);
    const totalExpenes = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenes}</span>
        </div>
    );
};
export default ExpensesTotal;