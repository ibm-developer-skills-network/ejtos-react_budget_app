import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const changeAllocation = (name, changeAmount) => {
        const expense = {
            name: name,
            cost: changeAmount,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
        
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> changeAllocation(props.name, 10)}>+</button></td>
        <td><button onClick={() => changeAllocation(props.name, -10)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
