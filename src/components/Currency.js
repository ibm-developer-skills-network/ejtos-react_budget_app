import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [currstate, setCurrstate] = useState(currency);

    const updateCurrencyHeader = () => {
        switch(currency) {
            case '$':
                setCurrstate('$ Dollars');
                break;
            case '£':
                setCurrstate('£ Pound');
                break;
            case '€':
                setCurrstate('€ Euro');
                break;
            case '₹':
                setCurrstate('₹ Ruppee');
                break;
            default:
                setCurrstate('£ Pound');
        }
    };

    useEffect(() => {
        updateCurrencyHeader()
    });

    const change_currency = (newCurrency) => {
        if (['$', '£', '€', '₹'].includes(newCurrency)) {
            console.log(newCurrency);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newCurrency
            });
        }
    }

    return (
    <div className='alert alert-secondary'>
        <Dropdown>
            <Dropdown.Toggle className='currency-dropdown' variant="success" id="dropdown-basic">
                Currency {currstate}
            </Dropdown.Toggle>

            <Dropdown.Menu className='currency-menu'>
                <Dropdown.Item onClick={() => {change_currency('$')}} className='currency-item' href="#/action-1">$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={() => {change_currency('£')}} className='currency-item' href="#/action-2">£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={() => {change_currency('€')}} className='currency-item' href="#/action-3">€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={() => {change_currency('₹')}} className='currency-item' href="#/action-4">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
    );
}

export default Currency;