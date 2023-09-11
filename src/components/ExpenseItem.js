import React, { useContext, useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const [currencySymbol, setCurrencySymbol] = useState(currency);

    useEffect(() => {
        setCurrencySymbol(currency);
    }, [currency]);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10, // Decrease by 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currencySymbol}{props.cost}</td>
            <td>
                <button onClick={() => increaseAllocation(props.name)}>+</button>
            </td>
            <td>
                <button onClick={() => decreaseAllocation(props.name)}>-</button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
