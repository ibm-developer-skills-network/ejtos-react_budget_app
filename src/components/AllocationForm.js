import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert(`The value cannot exceed remaining funds £${remaining}`);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === "Reduce") {
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
    <div>
      <div className="row">
        <div className="col-3">
          <div className="input-group">
            <span className="input-group-text">Department</span>
            <select
              class="form-select"
              id="floatingSelectGrid"
              onChange={(event) => setName(event.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">
                Marketing
              </option>
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
          </div>
        </div>

        <div className="col-3">
          <div className="input-group">
            <span className="input-group-text">Allocation</span>
            <select
              className="form-select"
              id="floatingSelectGrid"
              onChange={(event) => setAction(event.target.value)}
            >
              <option defaultValue value="Add" name="Add">
                Add
              </option>
              <option value="Reduce" name="Reduce">
                Reduce
              </option>
            </select>
          </div>
        </div>

        <div className="col-3">
          <div className="input-group">
            <span className="input-group-text">{currency}</span>
            <input
              type="number"
              className="form-control-sm"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-primary px-5" onClick={submitEvent}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
