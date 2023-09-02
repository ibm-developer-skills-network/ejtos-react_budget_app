import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
   
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><BsFillArrowUpSquareFill className="increment-btn" onClick={event=> increaseAllocation(props.name)}></BsFillArrowUpSquareFill></td>
        <td><BsFillArrowDownSquareFill className="decrement-btn" onClick={event=> decreaseAllocation(props.name)}></BsFillArrowDownSquareFill></td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;