import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plusButton from '../PlusButton.png';
import minusButton from '../MinusButton.png';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

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
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td><span>{currency} </span>{props.cost}</td>
        <td><button style={{ border: 0, backgroundColor: "white"}} onClick={event=> increaseAllocation(props.name)}><img style={{ width: 25, height: 25 }} src={plusButton} alt="Increase Allocation"/></button></td>
        <td><button style={{ border: 0, backgroundColor: "white"}} onClick={event=> decreaseAllocation(props.name)}><img style={{ width: 25, height: 25 }} src={minusButton} alt="Decrease Allocation"/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
