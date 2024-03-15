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
    <label className='rounded alert alert-success py-0'>
      <span className='font-weight-bold '>Currency: 
        <select
          className='border-0 alert alert-success font-weight-bold my-0'
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
      </span>
    </label>
  );
};

export default CurrencyDropDown;