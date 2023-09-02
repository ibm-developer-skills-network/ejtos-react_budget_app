import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyController = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch( {
            type: 'CHG_CURRENCY',
            payload: value
        })
    }

    return (
        <div className="alert alert-success">
            <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Ruppee</option>
                <option value="€">€ Euro</option>
            </select>	
        </div>
    )
}   

export default CurrencyController;