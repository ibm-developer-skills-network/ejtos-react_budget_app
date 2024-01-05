import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch,currency } = useContext(AppContext);
  const [budget, setBudget] = useState("");

  const handleBudgetChange = (event) => {
    console.log("new budget:", event.target.value);
    setBudget(parseInt(event.target.value));
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("enter key pressed");
      dispatch({ type: "SET_BUDGET", payload: budget });
    }
  };

  return (
    <div className="alert alert-secondary">
      <label htmlFor="cost">Budget: {currency}</label>
      <input
        required
        type="number"
        id="cost"
        value={budget}
        style={{ marginLeft: "2rem", width: "10rem" }}
        onChange={handleBudgetChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Budget;