import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch , currency } = useContext(AppContext);

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
            type: 'DEC_EXPENSE',
            payload : expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{ currency }{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} type="button" class="btn btn-outline-success">+</button></td>
        <td><button  onClick={event=> decreaseAllocation(props.name)} type="button" class="btn btn-outline-danger">-</button></td>
        <td><TiDelete size='3em' onClick={handleDeleteExpense} ></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
