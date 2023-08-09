import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };
    return (
        <div className='alert alert-secondary'>
            
            <label>Currency:
        
        <select className="custom-select" id="inputGroupSelect01" value={currency} onChange={handleCurrencyChange}>
        <option defaultValue>(£ Pound)</option>
<option value="$" name="Dollar">Dollar</option>
<option value="€" name="Euro">Euro</option>
<option value="₹" name="Ruppee">Ruppee</option>
<option value="£" name="Pound">Pound</option>

  </select>
  </label>
  </div>
    );
};
export default Currency;