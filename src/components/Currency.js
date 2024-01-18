import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency,dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange=(event)=>{
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: newCurrency,
      });
  }

return (	

<div className='alert alert-secondary' >
        <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >Currency
      <select name='hover_color'id="currency" onChange={handleCurrencyChange} style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}}>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>

)
};
export default Currency;