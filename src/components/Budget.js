import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);

  const changeBudget = val => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (val < totalExpenses) {
      alert("You cannot reduce the budget that is already allocated!");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: val
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <label>
        Budget: 
		<input
          type="number"
          step="10"
          value={budget}
          onInput={event => changeBudget(event.target.value)}
        />
      </label>
    </div>

/*
// Added from github repo https://github.com/vodenica/practice-ejtos-react_budget_app

return ...

<div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
*/

  );
};

export default Budget;
