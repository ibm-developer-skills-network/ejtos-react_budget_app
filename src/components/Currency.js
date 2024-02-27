import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency } = useContext(AppContext);

  //const (currency) = React.useState('currency')
  return (
    <div>
      <label>
        <select
          className="dropdown-content"
          value={currency}
          onChange={(event) => setAction(event.target.value)}
        >
          <option value="Dollar" name="Dollar">
            $ Dollar
          </option>
          <option value="Pound" name="Pound">
            £ Pound
          </option>
          <option value="Euro" name="Euro">
            € Eurp
          </option>
          <option value="Ruppee" name="Ruppee">
            ₹ Ruppee
          </option>
        </select>
      </label>
    </div>
  );
};

if (currency !== currency) {
  currency = currency;
  return;
}

export default Currency;
