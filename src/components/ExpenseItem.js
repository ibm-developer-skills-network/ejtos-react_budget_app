import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { actions } from "../context/actions";

export const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch(actions.deleteExpense(props.id));
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch(actions.addExpense(expense));
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch(actions.redExpense(expense));
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          className="rounded-circle btn btn-success"
          onClick={(event) => increaseAllocation(props.name)}
        >
          <i
            className="icon-button fa-solid fa-plus"
            style={{ color: "#fafcff" }}
          ></i>
        </button>
      </td>
      <td>
        <button
          className="rounded-circle btn btn-danger"
          onClick={(event) => decreaseAllocation(props.name)}
        >
          <i
            className="icon-button fa-solid fa-minus"
            style={{ color: "#f7f7f8" }}
          ></i>
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};
