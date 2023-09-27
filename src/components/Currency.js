import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    var currencies = [
        { id: '$', title: '$ Dollar' },
        { id: '£', title: '£ Pound' },
        { id: '€', title: '€ Euro' },
        { id: '₹', title: '₹ Ruppee' }
      ];

    const changeCurrency = (val) => {
        
        for (const c in currencies) {
            if(currencies[c].id == val)
                document.getElementById("currency-dropdown").innerHTML = "Currency (" +currencies[c].title + ")";
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    

    const currenciesItems = currencies.map((c) =>
    // Only do this if items have no stable IDs
        <Dropdown.Item eventKey={c.id}>{c.title}</Dropdown.Item>
    );
    return (
        <DropdownButton
      title="Currency (£ Pound)"
      id="currency-dropdown"
      variant="success"
      size="lg"
      onSelect={changeCurrency}
        >
        {currenciesItems}
      </DropdownButton>
    );

};

export default Currency;