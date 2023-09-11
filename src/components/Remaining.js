import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [currencySymbol, setCurrencySymbol] = useState(currency); // Initialize with the current currency

    useEffect(() => {
        // Update currencySymbol when the currency changes
        setCurrencySymbol(currency);
    }, [currency]);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currencySymbol}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
