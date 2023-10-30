import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_LIMIT = 20000;

const Budget = () => {
  const { dispatch, Currency, budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => total + item.quantity, 0);

  const checkAndThenSetBudget = (value) => {
    if (value < totalExpenses) {
      showAlert("Budget value cannot be lower than already allocated");
    } else if (value <= 0) {
      showAlert("Budget value has to be greater than zero");
    } else if (value > BUDGET_LIMIT) {
      showAlert(`Budget value cannot be greater than ${BUDGET_LIMIT}`);
    } else {
      changeBudget(value);
    }
  };

  const showAlert = (message) => {
    alert(message);
  };

  const changeBudget = (val) => {
    dispatch({
      type: 'CHG_BUDGET',
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      Budget: {Currency}
      <input
        required
        type="number"
        id="budget"
        value={budget}
        style={{ width: '100px' }}
        step={10}
        onChange={(event) => checkAndThenSetBudget(event.target.value)}
      />
    </div>
  );
};

export default Budget;
