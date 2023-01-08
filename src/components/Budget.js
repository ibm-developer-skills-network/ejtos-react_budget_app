import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    
    const [budget, newBudget] = useState("")
    const {dispatch} = useContext(AppContext);

const submitBudget =(event)=> {

    dispatch({
        type: 'CHG_BUDGET',
        payload: event.target.value,
    });
    newBudget(event.target.value)
    return;
    }

    return (
        <div className='alert alert-secondary'>
            
            Budget:
            <input 
            required='required'
            type='number'
            id='budget'
            min='0' 
            max='20000' 
            step='10'
            value={budget}
            onChange={(event) => submitBudget(event)}/>
        <br></br>
        Total budget is now {budget}
        </div>
        
    );
};

export default Budget;
