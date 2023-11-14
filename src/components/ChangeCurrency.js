import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
const ChangeCurrency = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <select
      className="btn btn-secondary dropdown-toggle px-5 py-3"
      id="floatingSelectGrid"
      onChange={handleCurrencyChange}
    >
      <option defaultValue>Change Currency</option>
      <option value="£" name="pound">
        Pound (£)
      </option>
      <option value="$" name="dollar">
        Dollar ($)
      </option>
      <option value="€" name="Euro">
        Euro (€)
      </option>
      <option value="₹" name="Rupee">
        Rupee (₹)
      </option>
      {/* Add other currency options as needed */}
    </select>
  );
};

export default ChangeCurrency;
