import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { currency, budget, dispatch } = useContext(AppContext);

  const handleBudgetChange = (e) => {
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div class="form-group row">
        <label for="budget" class="col-sm-4 col-form-label">
          Budget: {currency} {budget}
        </label>
        <div class="col-sm-8">
          <input
            type="number"
            class="form-control"
            step="10"
            id="budget"
            value={budget}
            onChange={handleBudgetChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;
