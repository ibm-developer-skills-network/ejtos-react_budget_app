import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <div class="form-group row">
        <label for="budget" class="col-sm-4 col-form-label">
          Budget: £{budget}
        </label>
        <div class="col-sm-8">
          <input
            type="number"
            class="form-control"
            step="10"
            id="budget"
            value={newBudget}
            onChange={handleBudgetChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;
