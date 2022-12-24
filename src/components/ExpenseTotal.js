import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExpenseTotalComponent = () => {
  
  const currentCurrencyObject = useSelector((state)=>state.CurrencyReducer.currentCurrency);
  const currentCurrencySymbol = Object.values(currentCurrencyObject)[0];
  
  const expensesState = useSelector((state) => state.ExpenseListReducer);
  const dispatch = useDispatch();

  // Calculate the sum of all expenses' allocations and update the spentBudget
  useEffect(() => {
    dispatch({
      type: "UPDATE SPENT BUDGET",
      expensesState // You send the state as payload to be processed by the reducer.
    });
  }, [expensesState,dispatch]);

  let spentBudget = useSelector((state) => state.BudgetReducer.spentBudget);

  return (
    <div class="col p-3">
      <p>Spent Budget: {currentCurrencySymbol}{spentBudget}</p>
    </div>
  );
};

export default ExpenseTotalComponent;


