import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch, } = useContext(AppContext);
  const updateCurrency = (event) => {
    console.log(currency+"....A..."+event.target.value);
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }

  return (
    <div className='btn btn-success dropdown-toggle'>
      <select 
        className='btn btn-success dropdown-toggle'
        id='currencySelect'
        onChange={(event) =>updateCurrency(event)}>Currency ({currency})
          <option defaultValue="£">Currency (£ Pound)</option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
      </select>
      <br></br>
      {/* I used the below to test the value change when the dropdown selection is changed */}
      The input value has changed. The new value is: {currency}
      
      </div>
  );
};

export default Currency;