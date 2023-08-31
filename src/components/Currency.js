import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);


    
    const handleChangeCurrency = value => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <select className="custom-select-react w-full" name="Location" id="Location" onChange={event=>handleChangeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>	
        </div>
    );
};
export default Currency;