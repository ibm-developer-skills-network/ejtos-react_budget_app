import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            
            Budget: {Currency}
            <input 
            type="number"
            id="budgetInput" 
            min="0" 
            max="20000" 
            step="10" 
            value={budget}/>
        <br></br>
        Total budget is now {budget}
        </div>
        
    );
};



export default Budget;
