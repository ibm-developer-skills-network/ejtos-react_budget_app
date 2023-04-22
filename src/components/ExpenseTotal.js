//Import AppContext and useContext Hook
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//Create Arrow Function Method
const ExpenseTotal = () => {
  //Use expenses element from AppContext
  const { expenses, currency } = useContext(AppContext);

  //Variable totalExpenses is equal to the sum of all expense items
  const totalExpenses = expenses.reduce((total, item) => {
    //Default total value of zero plus the item cost of all expenses equals new total value
    return (total += item.cost);
  }, 0);
  //Return blue-colored div with text and calculated-value displayed
  return (
    <div className="alert alert-primary">
      <span>
        Spent so far: {currency}
        {totalExpenses}
      </span>
    </div>
  );
};
export default ExpenseTotal;
