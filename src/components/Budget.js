import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const { newBudget, setNewBudget } = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  return (
    <div className="h-100 alert alert-secondary">
      <span className="mx-1">Budget: $</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
