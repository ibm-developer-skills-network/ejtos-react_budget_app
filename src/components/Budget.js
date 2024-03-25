import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
  const { budget, totalExpenses,currency, dispatch } = useContext(AppContext);

  const onChangeBudgetHandler = (event) => {
    const enteredValue = Number(event.target.value);

    // check if the entered value is a number
    if (Number.isNaN(enteredValue)) {
      alert('Please enter a valid number.');
      return;
    }

    // check if the entered value is an integer number
    if (!Number.isInteger(enteredValue)) {
      alert('Please enter an integer number.');
      return;
    }

    if (enteredValue < totalExpenses) {
      alert(
        "The value of the buget can't be lower than the expenses value " +
          currency +
          totalExpenses
      );
    } else {
      if (enteredValue > BUDGET_MAX_VALUE) {
        alert('Please enter a value less that ' + BUDGET_MAX_VALUE);
        return;
      }

      dispatch({
        type: 'SET_BUDGET',
        payload: enteredValue,
      });
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget">Budget:&nbsp;</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          placeholder='enter your budget'
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
