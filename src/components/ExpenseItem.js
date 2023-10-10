import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from 'react-icons/fc';
import { AiFillMinusCircle } from 'react-icons/ai' 
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

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

    // Added icons for "plus" and "minus"

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><FcPlus size='2.2em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><AiFillMinusCircle size='2.2em' color="red" onClick={event=> reduceAllocation(props.name)}></AiFillMinusCircle></td>
        <td><TiDelete size='3em' color="red" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
