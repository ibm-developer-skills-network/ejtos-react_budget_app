/*import React, { useState,useContext,useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {const [currency, setCurrency] = useState('');const { dispatch } = useContext(AppContext)};

const handleChange = (event) => {
    changeCurrencyCurrency(event.target.value);
    changeCurrency()
  };

  const changeCurrency = () => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: currency,
    });
  }

useEffect(() => {console.log(currency);}, [currency] )

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Currency: {' '}
                <select
                value = {currency}
                onChange={e => setCurrency(e.target.value)}>
                    <option value="£">GBP</option>
                    <option value="$">USD</option>
                    <option value="€">EUR</option>
                    <option value="¥">JPY</option>
                </select>
                
            </label>
        </form>
);

export default Budget;
*/

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { currency, dispatch, currencies } = useContext(AppContext);
  const handleChange = (e) => {
    dispatch({ type: "CHG_CURRENCY", payload: e.target.value });
  };
  return (
    <select
      style={{
        padding: "0.3rem 1rem",
        backgroundColor: "#80e188",
        borderRadius: "6px",
        fontSize: "1.3rem",
        color: "white",
        border: "none",
        ":hover": {
          backgroundColor: "white",
        },
      }}
      value="defaultValue"
      onChange={handleChange}
      //   defaultValue={currency.name}
      className="currency-select"
    >
      <option hidden disabled value={"defaultValue"}>
        Currency ({currency.symbol + " " + currency.name})
      </option>
      {currencies.map((item) => {
        {
          return (
            <CurrencyItem
              currentCurrency={currency.name}
              key={item.name}
              name={item.name}
              symbol={item.symbol}
            />
          );
        }
      })}
    </select>
  );
};
export default Currency;

function CurrencyItem({ currentCurrency, name, symbol }) {
  return (
    <option
      style={
        currentCurrency === name
          ? { color: "black", backgroundColor: "white" }
          : { color: "black" }
      }
      value={name}
    >
      {symbol} {name}
    </option>
  );
}