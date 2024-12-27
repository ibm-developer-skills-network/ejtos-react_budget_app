
import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

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
        <td><span style={{ background: 'green' ,padding: 1, borderRadius: '50%', maxWidth: 'fitcontent'}}><TiPlus color='white' size='2em' onClick={event=> increaseAllocation(props.name)}></TiPlus></span></td>
        <td><span style={{ background: 'red' ,padding: 1, borderRadius: '50%', maxWidth: 'fitcontent'}}><TiMinus color='white' size='2em' onClick={event=> decreaseAllocation(props.name)}></TiMinus></span></td>
        <td><TiDelete color='red' size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;