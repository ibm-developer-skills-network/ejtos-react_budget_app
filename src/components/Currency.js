import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch} = useContext(AppContext);
  
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
  
    <div className='btn-grp'>  
      <select 
        className='btn btn-success btn-lg'
        type="button"
        id='currency'
        onChange={(event) => updateCurrency(event)}>
          <option type='dropdown-menu' value={currency}>Currency ({currency})</option>
          <option type='dropdown-item' value='£'>£ Pound</option>
          <option type='dropdown-item' value='$'>$ Dollar</option>
          <option type='dropdown-item' value='€'>€ Euro</option>
          <option type='dropdown-item' value='₹'>₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;