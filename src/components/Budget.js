import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { currency, budget, expenses, dispatch } = useContext(AppContext);

  const handleBudgetChange = (e) => {
    const newBudget = e.target.value;

    if (newBudget > 20000) {
      alert("Budget cannot exceed 20,000");
      return;
    }

    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);

    if (newBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div class="form-group row">
        <label for="budget" class="col-sm-4 col-form-label">
          Budget: {currency}
          {budget}
        </label>
        <div class="col-sm-8">
          <input
            type="number"
            class="form-control"
            step="10"
            id="budget"
            value={budget}
            onChange={handleBudgetChange}
            max={20000}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;
