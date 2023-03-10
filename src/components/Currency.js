import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { Currency } = useContext(AppContext);
   
    return (

        <div className="DropDown" style={{ marginLeft: '2rem' }}>
          <label className="DropDown">Currency</label> {
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => Currency(event.target.value)}>
                <option defaultValue>Choose Currency</option>
                <option value="Dollar" name="Dollar">$ Dollar</option>
                <option value="Pound" name="Pound">£ Pound</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
            </select>}
           </div> 
    )
}
 
export default CurrencyList;