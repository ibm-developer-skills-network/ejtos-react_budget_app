import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from "./Remaining"

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > expenses) {
            alert("The value cannot exceed remaining funds £"+(budget-Remaining));
        } else {
            setNewBudget(value);
        }
    }
}
return (
Budget: £
);
}

export default Budget;
