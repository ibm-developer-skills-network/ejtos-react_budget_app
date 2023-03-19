import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType} p-3 d-flex align-items-center justify-content-between`} style={{ height: "80%" }}>
      <span>
        Remaining: <b> {currency} </b> {budget - totalExpenses}
      </span>
    </div>
  );
};

export default Remaining;