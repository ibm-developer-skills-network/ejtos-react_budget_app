//Import AppContext and useContext Hook
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

//Import TiDelete
import {TiDelete} from 'react-icons/ti';

//Create Arrow Function Method
const ExpenseItem = (props) => {

    //Use dispatch element from the AppContext AppReducer
    const {dispatch} = useContext(AppContext);

    //Creates a delete method using dispatch
    const handleDeleteExpense = () => {
        
        //Identifies dispatch type and payload to identify event change
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    //Creates a method to increase expenses with expense.name property
    const increaseAllocation = (name) => {
        
        //Identifies expense department name and declared cost increase value
        const expense = {
            name: name,
            cost: 10,
        };

        //Dispatches the increase and declares the type
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    //Returns expense name, cost 
    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={event=> increaseAllocation(props.name)}><b>+</b></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

//Allow other files to access ExpenseList.js
export default ExpenseItem;