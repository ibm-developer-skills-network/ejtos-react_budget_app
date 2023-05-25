import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTotalExpenses } from "../context/utils";

export const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = getTotalExpenses(expenses);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {budget - totalExpenses}
      </span>
    </div>
  );
};
