import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Dropdown } from "react-bootstrap";

const Currency = () => {
  const CURRENCY_LIST = [
    {
      symbol: "£",
      name: "Pound",
    },
    {
      symbol: "$",
      name: "Dollar",
    },
    {
      symbol: "₹",
      name: "Ruppee",
    },
    {
      symbol: "€",
      name: "Euro",
    },
  ];
  const { dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState({
    symbol: "£",
    name: "Pound",
  });
  const changeCurrency = (currency) => {
    setSelectedCurrency(currency);
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency.symbol,
    });
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" className="text-white">
        Currency ({selectedCurrency.symbol} {selectedCurrency.name})
      </Dropdown.Toggle>
      <Dropdown.Menu className="border border-success bg-success text-black">
        {CURRENCY_LIST.map((currency) => (
          <Dropdown.Item onClick={() => changeCurrency(currency)}>
            {currency.symbol} {currency.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Currency;
