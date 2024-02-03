import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import plusIcon from "../assets/plus.png";
import minusIcon from "../assets/minus.png";
import deleteIcon from "../assets/delete.png";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseALlocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = () => {
    dispatch({
      type: "RED_EXPENSE",
      payload: { name: props.name, cost: 10 },
    });
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
          onClick={(event) => increaseALlocation(props.name)}
          style={{ border: "none", background: "none" }}
        >
          <img src={plusIcon} alt="Increase" style={{ width: "20px" }} />
        </button>
      </td>
      <td>
        <button
          onClick={(event) => decreaseAllocation(props.name)}
          style={{ border: "none", background: "none" }}
        >
          <img src={minusIcon} alt="Decrease" style={{ width: "20px" }} />
        </button>
      </td>
      <td>
        <button
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{ border: "none", background: "none" }}
        >
          <img src={deleteIcon} alt="Decrease" style={{ width: "20px" }} />
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
