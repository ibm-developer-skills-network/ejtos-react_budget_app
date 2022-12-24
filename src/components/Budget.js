// Import action and dispatchers
import { ChangeBudgetAction } from '../action'
import { useDispatch, useSelector } from 'react-redux';


// Build BudgetComponent
const BudgetComponent = () => {
  const localbudget = useSelector((state) => state.BudgetReducer.budgetValue);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newBudget = parseInt(event.target.value, 10);
    dispatch(ChangeBudgetAction(newBudget));
  };

  return (
    <div class="col-auto p-3 border bg-primary text-white">
      <span>Budget: &euro;  </span>
      <input type="number" min="0" max="20000" name="budget-input" onChange={handleChange} value={localbudget}></input>
    </div>
  );
};

export default BudgetComponent;