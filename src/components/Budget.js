import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    
    
    const { dispatch, budget, currency } = useContext(AppContext);
    
    const [amount, setAmount] = useState(2000);
    
    const handleBudgetChange = (amount) => {

        dispatch({
            type: 'UPDATE_BUDGET',
            payload: parseInt(amount)
        });

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                        required='required'
                        type='number'
                        id='amount'
                        step="10"
                        value={budget}
                        style={{ width: '100px' }}
                        // onChange={(event) => setBudget(event.target.value)}
                        onChange={event => handleBudgetChange(event.target.value) }
                        >
                        </input>
            
            </span>
        </div>
    );
};
export default Budget;