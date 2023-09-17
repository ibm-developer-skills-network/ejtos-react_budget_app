import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-secondary'> {
      <select name="Currency" id="Currency" onChange={event=>changeLocation(event.target.value)}>
          placeholder= {'Currency'}
        <option value="£">(£) Pound)</option>
        <option value="₹">(₹)India</option>
        <option value="€">(€)Europe</option>
        <option value="CAD">($)Dollar</option>
      </select>	
      }	
      
    </div>
    );
};
export default Currency;