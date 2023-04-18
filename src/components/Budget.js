import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [setBudget] = useState('');
    const submitEvent = () => {
        if (budget > 20000) {
            alert("The value cannot exceed £20000");
            setBudget({ budget });
            return (
                <div className='alert alert-secondary'>
                    <span>Budget: £{budget} {<input type="number" />}</span>
                </div>
            );
        };
    };
}

export default Budget;
