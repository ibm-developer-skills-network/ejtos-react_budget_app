import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDown.css';

const CurrencyController = () => {
    const { dispatch, currency, currencyName } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        })
    }


    return (
        <>
            <style type="text/css">
                {`color {
                color: rgb(216,228,220);
                }
            `}
            </style>

            <Dropdown >
                <Dropdown.Toggle className="custom-dropdown-toggle" id="dropdown-basic">
                    Currency ({currency} {currencyName})
                </Dropdown.Toggle>

                <Dropdown.Menu className="alert alert-success text-white">
                    <Dropdown.Item onClick={event => changeCurrency("$")}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("£")}>£ Pound</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("₹")}>₹ Ruppee</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("€")}>€ Euro</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default CurrencyController;