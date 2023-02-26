import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import {TiDelete} from 'react-icons/ti';
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa';

const ExpenseItem = (props)=> {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = ()=> {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name:name, 
            cost:10,
        };

        dispatch({
            type:'ADD_EXPENSE',
            payload: expense,
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name:name, 
            cost:10,
        };

        dispatch({
            type:'RED_EXPENSE',
            payload: expense,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='1.9em' color="Green" onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
            <td><FaMinusCircle size='1.9em' color="Red" onClick={event => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><TiDelete size='2.2em' color="red" onClick={handleDeleteExpense}></TiDelete></td>

        </tr>
    );
};

export default ExpenseItem;
