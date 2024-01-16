import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget,currency,expenses,dispatch } = useContext(AppContext);
   

    	const handleBudgetChange = (val)=>{
        
      const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
      }, 0);
  
      
      if(val<totalExpenses) {
        alert("You cannot reduce the budget that is already allocated!");
      } 
  
          else if (val>20000){
              alert("The budget can't exceed 20000!");
          }
          
          
          else {
        dispatch({
          type: 'SET_BUDGET',
          payload: val,
        })
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
