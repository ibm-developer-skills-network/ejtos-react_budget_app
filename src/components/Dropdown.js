import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dropdown = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  return (
    <div className="mt-3">
      <label htmlFor="currencySelect" className="form-label">Currency:</label>
      <select
        id="currencySelect"
        value={currency}
        onChange={handleCurrencyChange}
        className="form-select"
      >
        <option value="USD">$ Dollar</option>
        <option value="GBP">£ Pound</option>
        <option value="EUR">€ Euro</option>
        <option value="INR">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Dropdown;
