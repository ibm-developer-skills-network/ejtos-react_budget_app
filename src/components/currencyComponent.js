import { AppContext } from '../context/AppContext'
import React, { useContext } from 'react';

const HandleCurrencyChange = (event) => {
    let newCurrency = "fag"
    const { dispatch } = useContext(AppContext);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: newCurrency,
    })
    return (
        <newCurrency />
    )
}

export default HandleCurrencyChange;