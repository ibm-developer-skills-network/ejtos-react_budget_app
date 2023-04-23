import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { dispatch, budget, remaining, expenses, currency } =
    useContext(AppContext);

  const submitEvent = (value) => {
    if (value > 20000) {
      alert("The value cannot exceed remaining funds  £" + remaining);
      return;
    }
    if (value < expenses) {
      alert("You can not reduce the budget value lower than the spending");
      return;
    }
    dispatch({
      type: "CHANGE_BUDGET",
      payload: parseInt(value),
    });
  };

  return (
    <div className="alert alert-secondary">
      <label>Budget: {currency}</label>
      <input
        required="required"
        type="number"
        id="budget"
        value={budget}
        step={10}
        // placeholder={budget}
        style={{ size: 8 }}
        onChange={(event) => submitEvent(event.target.value)}
      ></input>
    </div>
  );
};
export default Budget;
