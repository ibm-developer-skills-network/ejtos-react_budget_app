import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return(
    <select class="form-select" aria-label="Default select example" onChange={ handleCurrencyChange } value = {currency}>
        <option value="£">£ Pound</option>
        <option value="$"> $ Dollar</option>
    |   <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>      
    </select>
    ); 
};

export default Currency;