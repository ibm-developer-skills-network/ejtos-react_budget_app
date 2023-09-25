import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../Currency.css'; // Import a custom CSS file for styling

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className='col-sm'>
            <div className={`alert alert-success ${currency === '' ? '' : 'open'}`}>
                <label htmlFor="currencyDropdown">Currency ({currency})</label>
                <select
                    id="currencyDropdown"
                    value={currency}
                    onChange={handleCurrencyChange}
                    className={`form-control custom-dropdown ${currency === '' ? '' : 'btn-success'}`} // Apply Bootstrap classes
                >
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Currency;