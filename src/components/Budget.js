import React, { useContext, useEffect, useState } from "react";
import { AppContext, MAXIMUM_BUDGET } from "../context/AppContext";
import { actions } from "../context/actions";
import { getTotalExpenses } from "../context/utils";

export const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [value, setValue] = useState(budget);

  useEffect(() => {
    setValue(budget);
  }, [budget]);

  const onChange = (e) => {
    if (!isNaN(+e.target.value)) {
      setValue(e.target.value);
    }
  };

  const onBlur = () => {
    if (+value < getTotalExpenses(expenses)) {
      alert(
        `Budget was currected to ${getTotalExpenses(expenses)} due to expenses`
      );
    }
    if (value > MAXIMUM_BUDGET) {
      setValue(MAXIMUM_BUDGET);
    }
    dispatch(actions.setBudget(+value));
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          value={value}
          step={10}
          onChange={onChange}
          onBlur={onBlur}
          type="number"
        />
      </span>
    </div>
  );
};
