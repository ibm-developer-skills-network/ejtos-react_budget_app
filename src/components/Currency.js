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
		<div className='alert alert-secondary' >
        <label style={{marginLeft: '1rem' , backgroundColor:'#E6E6FA', color:'black'}}> Currency
        <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#E6E6FA', color:'black'}}>
        <option style={{color:'white'}}  value="£">Pound(£)</option>
        <option style={{color:'white'}} value="$">Dollar($)</option>
        <option style={{color:'white'}} value="€">Euro(€)</option>
        <option style={{color:'white'}}  value="₹">Ruppee(₹)</option>
      </select>
      </label>
    </div>
	);
};

export default Currency;