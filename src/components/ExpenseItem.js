import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiPlus } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.cost}</td>
      <td>
        <TiPlus
          size="1.25em"
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <TiDelete size="1.25em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
