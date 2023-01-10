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
    <div className='alert alert-secondary'>
      Currency:<span> </span>
      <select name="currency" id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
        <option value="£">£</option>
        <option value="$">$</option>
        <option value="€">€</option>
        <option value="₹">₹</option>
      </select>
     
    </div>
  );
};

export default Currency;
