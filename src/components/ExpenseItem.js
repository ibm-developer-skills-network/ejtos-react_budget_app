//Import AppContext and useContext Hook
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
//Import TiDelete
import { TiDelete } from "react-icons/ti";

//Create Arrow Function Method

const ExpenseItem = (props) => {
  //Use dispatch element from the AppContext AppReducer
  const { dispatch, currency } = useContext(AppContext);

  //Creates a delete method using dispatch

  const handleDeleteExpense = () => {
    //Identifies dispatch type and payload to identify event change
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  //Creates a method to increase expenses with expense.name property

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    //Dispatches the increase and declares the type
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  //Returns expense name, cost
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <AiFillPlusCircle
          size="2.25em"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <AiFillMinusCircle
          size="2.25em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
        />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
