import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalSpent = expenses.reduce((total, item) => {
        return (total += item.allocatedBoudget);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent: {Currency} {totalSpent}</span>
        </div>
    );
};

export default Spent;