import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { currency, budget, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType} text-center`}>
      <span>
        Remaining: {currency}
        {budget - totalExpenses}
      </span>
    </div>
  );
};

export default Remaining;
