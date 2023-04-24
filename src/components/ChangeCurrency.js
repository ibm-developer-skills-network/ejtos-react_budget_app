import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ChangeCurrency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const changeCurrency = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };
  return (
    <div className={`alert alert-success`}>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        value={currency}
        onChange={(event) => changeCurrency(event.target.value)}
      >
        {/* <option defaultValue>Choose...</option> */}
        <option value="$" name="Dollar">
          $ Dollar
        </option>
        <option value="£" name="Pound">
          £ Pound
        </option>
        <option value="€" name="Euro">
          € Euro
        </option>
        <option value="₹" name="Ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};
export default ChangeCurrency;
