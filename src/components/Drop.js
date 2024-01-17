import React from 'react'
import { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Drop({ onSelect }) {

  const [selectedOption, setSelectedOption] = useState('');
  const { dispatch  } = useContext(AppContext);


  // Handler function to update the selected option
  const handleSelectChange = (event) => {
    let s=event.target.value;
    let g = s.split(' ')[0];
    setSelectedOption(s);
    onSelect(s);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: g
    });
  };
  return (
    <div>
     
      <select className="bt" id="dropdown" value= {selectedOption} onChange={handleSelectChange}>
        <option className="bt" value="£ Pound">£ Pound</option>
        <option className="bt"  value="$ Dollar">$ Dollar</option>
        <option className="bt"  value="€ Euro">€ Euro</option>
        <option className="bt"  value="₹ Ruppee">₹ Ruppee</option>

      </select>
    </div>
  )
}
