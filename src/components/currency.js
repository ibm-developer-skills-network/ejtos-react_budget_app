import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch, } = useContext(AppContext);
  
  const updateCurrency = (event) => {
    /*console.log(currency+"....A..."+event.target.value);
    */
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }
  return (
    <div className='alert alert-secondary'>  
    <span>
      <select 
        className='btn btn-success dropdown-toggle'
        id='currency'
        onChange={(event) =>updateCurrency(event)}>Currency ({currency})
          <option defaultValue={currency}>Currency ({currency})</option>
          <option value='£'>£ Pound</option>
          <option value='$'>$ Dollar</option>
          <option value='€'>€ Euro</option>
          <option value='₹'>₹ Rupee</option>
      </select>
      </span>
    </div>



  );
};

export default Currency;