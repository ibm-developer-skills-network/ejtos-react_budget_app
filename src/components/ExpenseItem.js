import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
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
        <td><button style={{fontSize:'25px', borderRadius: '100%',width:'30px', height:'30px', color:'white', backgroundColor: 'green', display: 'flex', alignItems:'center', justifyContent: 'center', paddingBottom: '3px'}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{fontSize:'30px', borderRadius: '100%',width:'30px', height:'30px', color:'white', backgroundColor: '#D62020', display: 'flex', alignItems:'center', justifyContent: 'center', paddingBottom: '3px'}} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
