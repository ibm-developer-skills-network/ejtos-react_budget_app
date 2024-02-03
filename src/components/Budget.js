import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { expenses, budget, dispatch, currency } = useContext(AppContext);

  // Calculate the total expenses to determine the minimum budget allowed
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.value);
    setNewBudget(value);
  };

  const saveNewBudget = () => {
    if (newBudget < totalExpenses) {
      alert(
        `Budget cannot be lower than the total expenses: ${currency}${totalExpenses}`
      );
    } else if (newBudget > 20000) {
      alert(`Budget cannot exceed ${currency}20,000`);
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Budget: {currency}
          </span>
        </div>
        <input
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
          onBlur={saveNewBudget} // Save on input focus loss
          min={totalExpenses} // Minimum value
          max="20000" // Maximum value
        />
      </div>
    </div>
  );
};

export default Budget;
