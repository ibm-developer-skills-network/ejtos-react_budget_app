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

    const style = {
        common: {
            width: "30px",
            height: "30px",
            padding: "0px 0px",
            borderRadius: "50%",
            textAlign: "center",
            fontSize: "1.5rem",
            lineHeight: "0.01",
        },
        plus: {
            //backgroundColor: "#0f0",

        },
        minus: {
            //backgroundColor: "#f00",            
        }
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button className="btn btn-success rounded-circle btn-icon fw-bold" style={{ ...style.common, ...style.plus }} onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><button className="btn btn-danger rounded-circle fw-bold" style={{ ...style.common, ...style.minus }} onClick={event => decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;