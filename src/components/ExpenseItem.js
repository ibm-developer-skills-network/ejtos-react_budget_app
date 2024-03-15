import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.currency} {props.cost}</td>
            <td>
                <button className='border-0 rounded-circle bg-success bg-opacity-50' onClick={event => increaseAllocation(props.name)}>
                    {/* <p className='text-white font-weight-bold fs-3 p-0 m-0'>+</p> */}
                    <TiPlus size='1.5em' className='text-white'/>
                </button>
            </td>
            <td>
                <button className='border-0 rounded-circle bg-danger' onClick={event => decreaseAllocation(props.name)}>
                    {/* <p className='text-white font-weight-bold fs-3 p-0 m-0'>-</p> */}
                    <TiMinus size='1.5em' className='text-white'/>
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}/></td>
        </tr>
    );
};

export default ExpenseItem;