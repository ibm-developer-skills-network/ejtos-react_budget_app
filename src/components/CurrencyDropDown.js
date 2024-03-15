import React, { useState } from 'react';
import './styles.css';

const CurrencyDropDown = ({ onCurrencyChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('£');

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    onCurrencyChange(newCurrency); // Call the callback function passed as a prop
  };

  return (
    <label className='rounded bg-success p-2'>
      <span className='text-white font-weight-bold'>Currency: </span>
      <select
        className='border-0 bg-success text-white font-weight-bold'
        name='currency'
        id='currency'
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        <option value='$'>$ Dollar</option>
        <option value='£'>£ Pound</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Ruppee</option>
      </select>
    </label>
  );
};

export default CurrencyDropDown;