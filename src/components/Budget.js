import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';
const Budget = () => {
    const [currBudget, setCurrBudget] = useState(null);
    const { currency, dispatch } = useContext(AppContext);
    const budgetChange = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: currBudget
        });
    }
    return (
        <div className="d-flex gap-1">
            <div className='alert alert-secondary' style={{ height: "64px" }}>
                {/* <span>Budget: {currency}{budget}</span> */}
                <span className='d-flex gap-1'>Budget ({currency}) <input style={{ height: '30px', width: '100px' }} type="number" name="budget" id="budget" onChange={e => { setCurrBudget(e.target.value) }} /></span>
            </div>
            <button onClick={budgetChange} className="btn btn-success" style={{ "height": "64px" }}>
                Set
            </button>
        </div>
    );
};
export default Budget;