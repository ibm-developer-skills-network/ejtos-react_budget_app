import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [cost, setCost] = useState('');
    const [currencyPrefix, setCurrencyPrefix] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds ${currencyPrefix}${remaining}`);
            setCost("");
            return;
        }

        const expense = {
            name: '',
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    useEffect(() => {
        const currencyPrefixes = {
            USD: '$',
            GBP: '£',
            EUR: '€',
            INR: '₹',
            // Add more currency symbols as needed
        };
        setCurrencyPrefix(currencyPrefixes[currency]);
    }, [currency]);

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02">
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <div className="input-group-prepend">
                        <span className="input-group-text">{currencyPrefix}</span>
                    </div>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '1rem', size: 10 }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
