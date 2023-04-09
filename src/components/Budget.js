import React, { useState } from 'react';
//import { AppContext } from '../context/AppContext';
const Budget = () => {
    const [ budget, setBudget ] = useState('');

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;