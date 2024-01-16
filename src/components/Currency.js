import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency,dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange=(event)=>{
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: newCurrency,
      });
  }

return (<div
    style={{
      backgroundColor: 'lightgreen',
      padding:'0.5rem',
      marginleft: '2rem',
      className:'alert alert-primary',
    }}
  >
    <div>
    <label htmlFor="inputcurrency01">Currency ({selectedCurrency})</label>
    <select
      className="custom-select"
      id="inputcurrency01"
      value={selectedCurrency}
      onChange={handleCurrencyChange}
    >
      <option defaultValue>Select Currency</option>
      <option value="$" name="dollar">
        Dollar $
      </option>
      <option value="£" name="pounds">
        Pounds £
      </option>
      <option value="€" name="euro">
        Euro €
      </option>
      <option value="₹" name="ruppee">
        Ruppee ₹
      </option>
    </select>
  </div>
  </div>

)
};
export default Currency;