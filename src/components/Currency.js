
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = ()=>{
    const {dispatch,currency}=useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload:event.target.value
        })
    }
    return(
        <div className='alert alert-secondary'>
        <label for="cur">Currency : {currency} </label>
<select name="cur" id="cur" onChange={handleCurrencyChange}>
<option value="₹">₹ rupees</option>
  <option value="$">$ dollor</option>
  <option value="€">€ euro</option>
  <option value="£">£ Pound</option>
</select>
</div>
    );
};
export default Currency;