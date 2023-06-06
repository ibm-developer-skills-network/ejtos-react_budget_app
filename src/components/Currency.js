import React, { useState,useContext,useEffect } from 'react';import { AppContext } from '../context/AppContext';

const Budget = () => {const [currency, setCurrency] = useState('');const { dispatch } = useContext(AppContext);

const handleChange = (event) => {
    setCurrency(event.target.value);
    changeCurrency()
  };

  const changeCurrency = () => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: currency,
    });
  }

useEffect(() => {console.log(currency);}, [currency] )

return (
    <div className="alert alert-secondary">
    <select id="inputGroupSelect02" onChange={handleChange}>
            <option defaultValue>Currency</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
              </select>
              </div>
)};

export default Budget;