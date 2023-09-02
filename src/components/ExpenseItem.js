import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsFillDashCircleFill } from 'react-icons/bs';

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
        <td><BsFillPlusCircleFill size='2.2em' className="increment-btn text-success" onClick={event=> increaseAllocation(props.name)}></BsFillPlusCircleFill></td>
        <td><BsFillDashCircleFill size='2.2em' className="decrement-btn text-danger" onClick={event=> decreaseAllocation(props.name)}></BsFillDashCircleFill></td>
        <td><FaTimesCircle size='1.2em' color="grey" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;