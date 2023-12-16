import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const currencyPrefix = {
        USD: '$',
        GBP: '£',
        EUR: '€',
        INR: '₹',
        // Add more currencies as needed
    };

    const handleIncrease = () => {
        dispatch({
            type: 'INCREASE_EXPENSE',
            payload: props.id, // Sending the ID of the expense to be increased
        });
    };

    const handleDecrease = () => {
        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: props.id, // Sending the ID of the expense to be decreased
        });
    };

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currencyPrefix[currency]}{props.cost}</td>
            <td><button onClick={handleIncrease}>+</button></td>
            <td><button onClick={handleDecrease}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
