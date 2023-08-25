import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className="currency-dropdown" style={{ display: 'inline-block', padding: '10px', borderRadius: '5px' }}> {
      <div>Currency
      <select name="Currency" id="Currency" onChange={event=>changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>       
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      </div>
      }	
    </div>
    );
};

export default Currency;
