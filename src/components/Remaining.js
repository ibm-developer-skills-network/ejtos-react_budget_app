import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalexpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalexpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`h-100 alert ${alertType}`}>
      <span>Remaining:{budget - totalexpenses}</span>
    </div>
  );
};
export default Remaining;
