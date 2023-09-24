// Currency.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Currency.css"; // Import a custom CSS file for styling

const Currency = () => {
  const { selectedCurrency, setSelectedCurrency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCurrency(selectedValue);
  };

  return (
    <div className="currency-dropdown">
      <select
        className='alert alert-secondary'
        id="currency"
        onChange={handleCurrencyChange}
        value={selectedCurrency}
      >
        <option value="$"> $ Dollar</option>
        <option value="£"> £ Pound</option>
        <option value="€"> € Euro</option>
        <option value="₹"> ₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;
