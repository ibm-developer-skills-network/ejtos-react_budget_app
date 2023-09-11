import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const [currencySymbol, setCurrencySymbol] = useState(currency); // Initialize with the current currency

    useEffect(() => {
        // Update currencySymbol when the currency changes
        setCurrencySymbol(currency);
    }, [currency]);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currencySymbol}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
