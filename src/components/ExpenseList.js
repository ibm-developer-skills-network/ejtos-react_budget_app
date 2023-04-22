//Import AppContext and useContext Hook
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//Import ExpenseItem
import ExpenseItem from "./ExpenseItem";

//Create Arrow Function Method
const ExpenseList = () => {
  //Use expenses element from AppContext
  const { expenses } = useContext(AppContext);

  //Return table with headers and imported ExpenseItem mapped in table body
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
