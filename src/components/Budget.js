import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '1rem' }}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>           
        </div>
    );
};
export default Budget;