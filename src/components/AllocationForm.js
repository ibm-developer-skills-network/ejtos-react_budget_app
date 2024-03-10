import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining fund $" + remaining);
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
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Departement
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => setName(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option vlaue="Marketing" name="marketing">
              Marketing
            </option>
            <option vlaue="Sales" name="sales">
              Sales
            </option>
            <option vlaue="Finance" name="finance">
              Finance
            </option>
            <option vlaue="HR" name="hr">
              HR
            </option>
            <option vlaue="IT" name="it">
              IT
            </option>
            <option vlaue="Admin" name="admin">
              Admin
            </option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(e) => setAction(e.target.value)}
          >
            <option vlaue="Add" name="Add">
              Add
            </option>
            <option vlaue="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
          <input
            required="required"
            type="number"
            id="cost"
            value={cost}
            style={{ marginLeft: "2rem", tabSize: 10 }}
            onChange={(e) => setCost(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AllocationForm;
