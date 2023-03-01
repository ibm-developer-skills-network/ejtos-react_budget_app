import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch } = useContext(AppContext);
    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
    <div className='list-group-item-success'style={{borderRadius:'10px'}}> Currency{
      <select name="Location" id="Location" className='alert' onChange={event=>changeLocation(event.target.value)}
      style={{padding:'10px 10px', height:'40px',textAlign:'center',background:'light'}}>
        <option value="£" className='list-group-item-success'>£ Uk</option>
        <option value="$"  className='list-group-item-success'>$ Dollar</option>
        <option value="₹"  className='list-group-item-success'>₹ India</option>
        <option value="€"  className='list-group-item-success'>€ Europe</option>
      </select>	
      }	
    </div>
    );
};

export default Location;