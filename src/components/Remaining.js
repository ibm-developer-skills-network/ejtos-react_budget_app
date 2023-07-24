import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Budget, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.allocatedBoudget);
    }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Currency} {parseInt(Budget) - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
