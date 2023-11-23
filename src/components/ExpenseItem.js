import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { IoAddCircleSharp } from "react-icons/io5";
import { IoRemoveCircleSharp } from "react-icons/io5";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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
        <td>{currency}{props.cost}</td>
        <td><IoAddCircleSharp size='2.8em' color="green" onClick={event=> increaseAllocation(props.name)}>+</IoAddCircleSharp></td>
        <td><IoRemoveCircleSharp size='2.8em' color="red" onClick={event=> decreaseAllocation(props.name)}>-</IoRemoveCircleSharp></td>
        <td><FaTimesCircle size='2.8em' color="red" onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
