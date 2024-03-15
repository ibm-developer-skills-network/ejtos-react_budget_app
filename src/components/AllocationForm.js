import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const AllocationForm = (props) => {
    const {dispatch, remaining} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if(cost > remaining) {
            alert("The value cannot exceed the remaining funds £" + remaining);
            setCost("");
            return;
        };
        
        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if(action === "Reduce"){
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
        <div>
            <div className='input-group-mb-3 row'>
                <div className='input-group-prepend col-sm' style={{ marginLeft: '2rem' }}>
                    <div className='row'>
                        <label className='input-group-text col-sm my-2' htmlFor='inputGroupSelect01'>Department</label>
                        <select className="custom-select col-sm my-2" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Marketing" name="marketing"> Marketing</option>
                            <option value="Sales" name="sales">Sales</option>
                            <option value="Finance" name="finance">Finance</option>
                            <option value="HR" name="hr">HR</option>
                            <option value="IT" name="it">IT</option>
                            <option value="Admin" name="admin">Admin</option>
                        </select>
                    </div>
                </div>

                <div className="input-group-prepend col-sm  my-2 mx-5" style={{ marginLeft: '2rem' }}>
                    <div className='row'>
                        <label className="input-group-text col-sm" htmlFor="inputGroupSelect02">Allocation</label>
                        <select className="custom-select col-sm" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                        </select>
                    </div>
                </div>

                <div className='col-sm my-2'>
                    <div className='row'>
                        {props.selectedCurrency}
                        <input
                            className='currency-input col-sm mx-1'
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            style={{ size: 10}}
                            onChange={(event) => setCost(event.target.value)}>
                        </input>
                    </div>
                </div>
                
                <button className="btn btn-primary col-sm my-2 mx-5" onClick={submitEvent}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AllocationForm;