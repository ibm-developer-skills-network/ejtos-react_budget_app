import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const [budget, setValue] = useState(2000);
  const { expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const setBudget = (event) => {
    const inputNumber = event.target.value;
    setValue(inputNumber);
    if (inputNumber > 20000) {
      alert("The value cannot exceed £20000");
      setValue(budget);
      return;
    }
    if (inputNumber < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending!");
      setValue(budget);
      return;
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        required="required"
        type="number"
        id="budget"
        value={budget}
        step={10}
        style={{ width: 150 }}
        onChange={setBudget}
      ></input>
    </div>
  );
};
export default Budget;
