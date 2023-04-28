import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, Currency } = useContext(AppContext);
    const [inputBudget, setInputBudget] = useState('');

    const handleInputChange = (e) => {
        setInputBudget(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputBudget > 20000) {
            alert("The value cannot exceed £20000");
            return;
        }

        setBudget(parseInt(inputBudget));
        setInputBudget('');
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span>
            <form onSubmit={handleSubmit}>
             £<input type="number" value={inputBudget} onChange={handleInputChange} step="10" />
                <button type="submit">Update Budget</button>
            </form>
        </div>
    );
};

export default Budget
