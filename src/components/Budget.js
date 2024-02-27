import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const limitValue = 20000;
    const { budget, dispatch, remaining ,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        console.log(event.target.value);
 
    if ( newBudget <= limitValue) {
        dispatch({ type: "SET_BUDGET", payload: newBudget });
      }else if (newBudget > limitValue) {
          alert("The value cannot exceed remaining funds " + currency + remaining);   
      }}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
