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
