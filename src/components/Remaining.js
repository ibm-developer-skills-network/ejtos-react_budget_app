import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
//Here, you are using the reduce function to get a total of all the costs, assigning this to a variable and displaying the variable in your JSX.
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
