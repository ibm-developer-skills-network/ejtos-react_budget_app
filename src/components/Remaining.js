import { useSelector } from 'react-redux';

const RemainingComponent = () => {

  const currentCurrencyObject = useSelector((state)=>state.CurrencyReducer.currentCurrency);
  const currentCurrencySymbol = Object.values(currentCurrencyObject)[0];

  let budgetValue = useSelector((state) => state.BudgetReducer.budgetValue);
  let spentBudget = useSelector((state) => state.BudgetReducer.spentBudget);
  const remainingBudget = budgetValue - spentBudget;

  return (
    <div class="remaining-component-div col p-3">
      <p>Remaining: {currentCurrencySymbol} {remainingBudget}</p>
    </div>
  );
};

  export default RemainingComponent;
  
