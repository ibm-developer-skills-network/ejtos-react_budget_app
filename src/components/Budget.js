import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [updatedBudget, setupdatedBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);
  console.log('Expenses' + totalExpenses);
  const handleBudget = (e) => {
    const newBudget = parseInt(e.target.value);
    if (newBudget > 20000) {
      alert("Must not be greater than 20,000");
      setupdatedBudget(budget);
      return;
    } else if(newBudget < totalExpenses) {
        alert("Must not be Less than" + totalExpenses);
        setupdatedBudget(budget);
        return;
    }else
     {
      setupdatedBudget(newBudget);
    }
  }
  return (
    <div className='alert alert-secondary'>
      <span>Budget £:  
        <input type="number" 
          value={updatedBudget} 
          step={10} 
          onChange={handleBudget}/>
      </span>
    </div>
  );
};
export default Budget;
