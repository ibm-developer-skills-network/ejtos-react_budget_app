import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

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
            cost:10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>
        <td>
            <svg onClick={event=> increaseAllocation(props.name)} width="64px" height="64px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>70 Basic icons by Xicons.co</title><path d="M24,3A21,21,0,1,0,45,24,21,21,0,0,0,24,3Z" fill="#63c56a"></path><path d="M32,26H16a2,2,0,0,1,0-4H32A2,2,0,0,1,32,26Z" fill="#ffffff"></path><path d="M24,34a2,2,0,0,1-2-2V16a2,2,0,0,1,4,0V32A2,2,0,0,1,24,34Z" fill="#ffffff"></path></g></svg>
        </td>
        <td>
        <svg onClick={event=> decreaseAllocation(props.name)} width="64px" height="64px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>70 Basic icons by Xicons.co</title><path d="M24,3A21,21,0,1,0,45,24,21,21,0,0,0,24,3Z" fill="#9a1021"></path><path d="M32,26H16a2,2,0,0,1,0-4H32A2,2,0,0,1,32,26Z" fill="#ffffff"></path></g></svg>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
