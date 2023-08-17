import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };
    return (
        <div className='alert alert-secondary'>
            
            <label>Currency:
        
        <select className="custom-select" id="inputGroupSelect01" value={currency} onChange={handleCurrencyChange}>
        <option defaultValue value="£" name="Pound">(£ Pound)</option>
<option value="$" name="Dollar">$ Dollar</option>
<option value="€" name="Euro">€ Euro</option>
<option value="₹" name="Ruppee">₹ Ruppee</option>

  </select>
  </label>
  </div>
    );
};
export default Currency;