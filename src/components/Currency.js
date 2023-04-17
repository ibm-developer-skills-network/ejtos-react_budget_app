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
        <div className='alert alert-success' style={{border: 'none', background: '#90ee90', width: 200, color: '#f5f6fa'}}>
            <span>Currency (
                <select 
                    name="Currency" 
                    id="Currency"
                    onChange={event=>changeCurrency(event.target.value)}
                    style={{size: 10, border: 'none', background: '#90ee90', cursor: 'pointer', color: '#f5f6fa'}}>
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option defaultValue value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            )</span>
        </div>
    );
};
export default Currency;