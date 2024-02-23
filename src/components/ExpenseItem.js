import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(AppContext);

  const editAllocation = (name, type) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: type,
      payload: expense,
    });
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
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
          className="btn btn-success rounded-circle"
          onClick={(event) => editAllocation(props.name, "ADD_EXPENSE")}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger rounded-circle px-3"
          onClick={(event) => editAllocation(props.name, "RED_EXPENSE")}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete size="2em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
