import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

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
    //added decrease allocation option
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
        <td>{Location}{props.cost}</td>
        <td><button type='button' onClick={(event)=> increaseAllocation(props.name)} className='btn btn-success btn-circle'
                style={{borderRadius:'60px', padding:'2px 5px', fontSize:'20px', height:'35px',textAlign:'center'}}>+</button></td>
        <td><button type='button' onClick={(event)=> decreaseAllocation(props.name)} className='btn btn-danger btn-circle '
                style={{borderRadius:'60px', padding:'2px 10px', fontSize:'20px', height:'35px',textAlign:'center'}}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
