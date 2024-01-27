import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency:contextCurrency, dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState(contextCurrency);
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        setCurrency(contextCurrency);
    }, [contextCurrency]);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setCurrency(newCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
        setSelectValue('');
    };


    return (
        <div class="input-group mb-3">
            <select className="custom-select alert alert-success" id="currencyGroupSelect01" onChange={handleCurrencyChange} value={selectValue}>
                <option value="" selected disabled hidden>Currency ({currency})</option>
                <option value="$ Dollar" className="dropdown-item alert alert-success">$ Dollar</option>
                <option value="£ Pound" className="dropdown-item alert alert-success">£ Pound</option>
                <option value="€ Euro" className="dropdown-item alert alert-success">€ Euro</option>
                <option value="₹ Ruppee" className="dropdown-item alert alert-success">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;