import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  const currencyOptions = {
    USD: 'USD ($)',
    GBP: 'GBP (£)',
    EUR: 'EUR (€)',
    INR: 'INR (₹)',
    // Add more currency options if needed
  };

  return (
    <div className='alert alert-success'>
      <select
        className='form-select green-text' // Assign a class for styling
        aria-label='Select Currency'
        value={currency} // Set the value of the select element to the current currency
        onChange={handleCurrencyChange}
      >
        {Object.keys(currencyOptions).map((key) => (
          <option key={key} value={key}>
            {currencyOptions[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
