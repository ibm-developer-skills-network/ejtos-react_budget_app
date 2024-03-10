import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    // Determine alert type based on remaining budget
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            {/* Display remaining budget */}
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;

