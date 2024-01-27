import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining, currency  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        const numericCost = parseFloat(cost);

        if (isNaN(numericCost) || numericCost <= 0) {
            alert("Please enter a positive number for cost");
            setCost("");
            return;
        }

        if(cost > remaining) {
            alert("The submitted total cost, £" + numericCost + " is more than the remaining £" + remaining + ".");
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
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div className="input-group custom-left">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Department</span>
            </div>
            <select className="custom-select custom-right" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Admin">Admin</option>
            </select>

            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon2">Allocation</span>
            </div>
            <select className="custom-select custom-right" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                <option defaultValue value="Add">Add</option>
                <option value="Reduce">Reduce</option>
            </select>

            <div className="input-group-prepend">
                <span className="input-group-text">{currency[0]}</span>
            </div>

            <input
                className="custom-right"
                required
                type="number"
                id="cost"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
            />

            

            <button className="btn btn-primary custom-right" type="button" onClick={submitEvent}>
            Save
            </button>
        </div>

    );
};

export default AllocationForm;
