import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyChange = () => {
    const {currency, availableCurrencies, dispatch} = useContext(AppContext);



    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;

        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    };

    return (
        <div>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="">Change Currency:</option>
                {availableCurrencies.map((curre) => (
                    <option key={curre} value={curre}>
                        {curre}
                    </option>
                ))}

            </select>
        </div>

    );

};

export default CurrencyChange;