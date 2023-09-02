import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const CurrencyController = () => {
    const { dispatch, currency, currencyName } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        })
    }


    return (
            <Dropdown>
                <Dropdown.Toggle className="alert alert-success text-white" id="dropdown-basic">
                    Currency ({currency} {currencyName})
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={event => changeCurrency("$")}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("£")}>£ Pound</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("₹")}>₹ Ruppee</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("€")}>€ Euro</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

export default CurrencyController;