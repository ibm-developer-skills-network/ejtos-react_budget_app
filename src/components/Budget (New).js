import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const remaining = require("./Remaining")
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{<input type="number" max="20000" />}</span>
            if (({ budget } > 20000) {
                alert("The value cannot exceed remaining funds  £"+({ remaining }));
            };                
                return;
        </div>

const New Budget = () => {    
    const { budget, Remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
    if (value > expenses) {
        alert("The value cannot exceed remaining funds £"+(budget-Remaining));
    } else {
        setNewBudget(value);
    };
};

export default Budget;
