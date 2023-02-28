import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
  
    const onCurrencySelect = (event) => {
      const currency = event.target.value;
      dispatch({ type: 'CHG_CURRENCY', payload: currency });
    };

return (
    <div>
    <select value={currency} onChange={onCurrencySelect}>
    <option value= "$">$ Dollar</option> 
    <option value ="£">£ Pound</option>
    <option value ="€">€ Euro</option>
    <option value = "₹">₹ Ruppee</option>
    </select> </div>
);
};

export default Currency;