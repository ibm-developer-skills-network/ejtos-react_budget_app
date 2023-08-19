import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from "bootstrap";

const Currency = () => {
    
    //return (
        const { currency, dispatch } = useContext(AppContext);

        const currencyList = [
            { symbol: "$", label: "Dollar" },
            { symbol: "£", label: "Pound" },
            { symbol: "€", label: "Euro" },
            { symbol: "₹", label: "Rupee" },
        ]    
    
        const handleChangeCurrency = (value)=>{
            dispatch({type:"CHG_CURRENCY", payload: value});
        }
    
        return (
    
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "#93e499", borderColor: "#93e499" }}>
                    Currency ({currency} {currencyList.find((x)=> {return x.symbol === currency}).label})
                </button>
                <ul className="dropdown-menu" style={{ background: "#93e499"}}>
                    {currencyList.map((item, index) => {
                        return (
                            <li key={index} onClick={()=>{handleChangeCurrency(item.symbol)}}><a className="dropdown-item" href="#">{item.symbol} {item.label}</a></li>
                        )
                    })}
                </ul>
            </div>
    
        );

        //<div class="dropdown">
        //<button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Currency
        //<span class="caret"></span></button>
        //<ul class="dropdown-menu"  style = {{background: "#93e499"}}>
        //  <li><a href="#">$ Dollar</a></li>
        //  <li><a href="#">£ Pound</a></li>
        //  <li><a href="#">€ Euro</a></li>
        //  <li><a href="#">₹ Rupee</a></li>
        //</ul>
      //</div>
    //);
};
export default Currency;
