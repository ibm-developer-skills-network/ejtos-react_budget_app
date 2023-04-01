//Import AppContext, useContext Hook, and useState Hook
import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

//Create Arrow Function Method
const AllocationForm = (props) => {

    //Use dispatch and remaining element from AppContext
    const {dispatch, remaining, currency } = useContext(AppContext);

    //Use name, cost, action for useState Hook
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    //Use name, cost, action for useState Hook
    const submitEvent = () => {

        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            setCost("");
            return;
        }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        }
        else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
            </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="Marketing" name="Marketing"> Marketing</option>
                    <option value="Sales" name="Sales">Sales</option>
                    <option value="Finance" name="Finance">Finance</option>
                    <option value="Human Resource" name="Human Resource">HR</option>
                    <option value="IT" name="IT">IT</option>
                </select>
            <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
            </div>
                <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
            <div className="input-group-prepend" style={{ marginLeft: '2rem', size: 10}}>
                {currency}
            </div>
            <input className="input-group-prepend"
                required='required'
                type='number'
                id='cost'
                value={cost}
                style={{ marginLeft: '0.25rem'}}
                onChange={(event) => setCost(event.target.value)}>
            </input>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                Save
            </button>
        </div>
    );
};

export default AllocationForm;