import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch, currency, remaining } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds: $" + remaining);
      setCost("");
      return;
    }
    const expense = {
      name,
      cost: parseInt(cost),
    };
    if (action === "REDUCE") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };
  return (
    <div className="row">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Department
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          onChange={(event) => setName(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          <option value="Sales" name="sales">
            Sales
          </option>
          <option value="Finance" name="finance">
            Finance
          </option>
          <option value="HR" name="hr">
            HR
          </option>
          <option value="IT" name="it">
            IT
          </option>
          <option value="Admin" name="admin">
            Admin
          </option>
        </select>
        <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
          <label className="input-group-text" htlmFor="inputGroupSelect02">
            Allocation
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect02"
          onChange={(event) => setAction(event.target.value)}
        >
          <option defaultValue value="Add" name="Add">
            Add
          </option>
          <option value="Reduce" name="Reduce">
            Reduce
          </option>
        </select>
        <span style={{ marginLeft: "2rem", size: 10 }}>
          {currency}
          <input
            required
            type="number"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </span>
        <button
          className="btn btn-primary"
          onClick={submitEvent}
          style={{ marginLeft: "2rem" }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AllocationForm;
