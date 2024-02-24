import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { currency, dispatch, remaining } = useContext(AppContext);

  const [name, setName] = useState("");
  const [action, setAction] = useState("");
  const [cost, setCost] = useState("");

  const submitEvent = (e) => {
    e.preventDefault();

    const expense = { name: name, cost: parseInt(cost) };

    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      if (cost > remaining) {
        alert("The value cannot exceed remaining funds  £" + remaining);
        setCost("");
        return;
      }

      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <form onSubmit={submitEvent}>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
            required
          >
            <option value="">Choose...</option>
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
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
            required
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <div class="col-2" style={{ marginLeft: "2rem" }}>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">{currency}</div>
              </div>
              <input
                id="cost"
                type="number"
                class="form-control"
                placeholder="Cost"
                value={cost}
                required
                onChange={(event) => setCost(event.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary rounded"
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AllocationForm;
