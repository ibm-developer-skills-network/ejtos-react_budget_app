
import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpense = useRef(0);
  useEffect(() => {
    dispatch({ type: "SET_BUDGET", payload: newBudget });
  }, [newBudget]);
  useEffect(() => {
    totalExpense.current = expenses.reduce((prev, curr) => {
      return prev + curr.cost;
    }, 0);
  }, []);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency.symbol}
        {budget}
      </span>
      <input
        type="number"
        step="10"
        min={totalExpense.current}
        max={20000}
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;