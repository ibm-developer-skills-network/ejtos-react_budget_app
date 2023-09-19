
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    const alertMessage = totalExpenses > budget ? 'The value cannot exceed remaining funds' : budget-totalExpenses;

    return (
        <div className={`alert ${alertType}`}>
            {alertMessage && <p>{alertMessage}</p>}
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;