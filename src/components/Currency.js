import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Location {
      <select name="Location" id="Location" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">Dollar($)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="£">Pound(£)</option>
      </select>	
      }	
    </div>
    );
};

export default Location;
