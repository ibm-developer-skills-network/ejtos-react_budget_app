import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currencySymbol, setCurrencySymbol] = useState(currency); // Initialize with the current currency

    useEffect(() => {
        // Update currencySymbol when the currency changes
        setCurrencySymbol(currency);
    }, [currency]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currencySymbol}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
