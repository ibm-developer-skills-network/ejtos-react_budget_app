import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div className="alert alert-primary p-3 d-flex align-items-center justify-content-between" style={{ height: "80%" }}>
      <span>
        Spent so far: <b> {currency} </b> {totalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;