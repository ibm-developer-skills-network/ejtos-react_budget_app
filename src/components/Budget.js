import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const submitEvent () => {
        if (budget > 20000) {
            alert("The value cannot exceed £20000");
            setBudget({ budget });
            return (
                <div className='alert alert-secondary'>
                    <span>Budget: £{<input type="number" />}</span>
                </div>
            );
        };
    };
}

export default Budget;
