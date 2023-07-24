import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { MdDoNotDisturbOn } from 'react-icons/md';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncreaseBoudget = () => {

        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };

    const handleDecreaseBoudget = () => {
        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.budget)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseBoudget}></FaPlusCircle></td>
        <td><MdDoNotDisturbOn size='2.2em' color="red" onClick={handleDecreaseBoudget}></MdDoNotDisturbOn></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;