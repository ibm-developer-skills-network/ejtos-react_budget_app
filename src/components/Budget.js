import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((sum, item) => {
    return (sum = sum + item.cost);
  }, 0);
  const setBudget = (event) => {
    if (event.target.value > 20000) {
      alert("Maximum limit for budget is only 20,000. Try again");
      return;
    } else if (event.target.value < totalExpenses) {
      alert("The budget must not be lower than the spending.");
      return;
    }
    dispatch({
      type: "SET_BUDGET",
      payload: event.target.value,
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          type="number"
          max={20000}
          step={10}
          onBlur={(event) => setBudget(event)}
          required
        ></input>
      </span>
    </div>
  );
};

export default Budget;
