import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary d-flex  flex-md-row">
      Currency  
      {
        <select
          className="form-select form-select-sm mx-lg-2  w-75"
          name="Currency"
          id="Currency"
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Currency;