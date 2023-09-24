import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  
  const handleBudgetChange = (event) => {
    const inputValue = parseInt(event.target.value);

    // handling the upper limit 
    if (inputValue > 20000) {
      alert("The budget value can not exceed 20000");
      setNewBudget(20000);
    }
    // handling lower limit
    else if(inputValue < totalExpenses) {
      alert('The budget cannot be less than the total spent amount');
      setNewBudget(totalExpenses);
    }
    else {
      setNewBudget(inputValue);
    }
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);


  return (
    <div className="alert alert-secondary">
      <span>Budget: $</span>
      <input
        type="number"
        step="10"
        min="0"
        max="20000"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;