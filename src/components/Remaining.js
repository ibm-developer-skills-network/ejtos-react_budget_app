//Import AppContext and useContext Hook
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//Create Arrow Function Method
const Remaining = () => {
  //Use expenses and budget elements from AppContext
  const { expenses, budget, currency } = useContext(AppContext);

  //Variable totalExpenses is equal to the sum of all expense items
  const totalExpenses = expenses.reduce((total, item) => {
    //Default total value of zero plus the item cost of all expenses equals new total value
    return (total += item.cost);
  }, 0);
  //If totalexpenses is greater than the budget value, return danger, otherwise success
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  //Return green or red-colored div with text and calculated value displayed
  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {budget - totalExpenses}
      </span>
    </div>
  );
};
export default Remaining;
