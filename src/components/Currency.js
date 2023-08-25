import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary' style={{ display: 'inline-block', padding: '10px', borderRadius: '5px' }}> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>       
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;
