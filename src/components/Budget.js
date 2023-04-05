import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, totalExpenses, currency } = useContext(AppContext);
  const [updatedBudget, setupdatedBudget] = useState(budget);
  console.log('Expenses' + totalExpenses);
  const withBudget = (e) => {
    const newBudget = parseInt(e.target.value);
    if (newBudget > 20000) {
      alert("Cannot be greater than 20,000");
      setupdatedBudget(budget);
      return;
    } else if(newBudget < totalExpenses) {
        alert("Cannot be less than" + totalExpenses);
        setupdatedBudget(budget);
        return;
    }else
     {
      setupdatedBudget(newBudget);
    }
  }
  return (
    <div className='alert alert-secondary'>
      <span>Budget {currency}:  
        <input type="number"
          value={updatedBudget}
          step={10}
          onChange={withBudget}/>
      </span>
    </div>
  );
};
export default Budget;
