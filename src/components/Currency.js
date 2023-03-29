import React, {useState, useContext} from "react";
import {AppContext} from "..context/AppContext";
import {Dropdown} from "react-bootstrap";

const Currency = () => {
  const CURRENCY_LIST = [
    { 
      symbol= "$",
      name="Dollar",
    },
    {
      symbol="£",
      name="Pound",
    },
    {
      symbol="€",
      name="Euro",
    },
    {
      symbol="₹"
      name="Ruppee"
    },
    ];
  
  const {dispatch} = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState({
       symbol="£",
      name="Pound",
  });
  const changeCurrency =(currency) => {
    setSelectedCurrency(currency);
    dipatch({
      type="CHG_CURRENCY",
      payload=currency.symbol,
    });
  };
  
  return (
    <Dropdown>
    <Dropdown.Toggle varient="sucess" className="text-white">
    Currency({selectedCurrency.symbol} {selectedCurrency.name})
  </Dropdown.Toggle>

<Dropdown.Menu className=" border border-sucess bg-sucess text-black">
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


    
     
  
  
      
