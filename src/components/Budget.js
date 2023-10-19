import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import AllocationForm from './AllocationForm';
const Budget = (props) => {
    const { budget, remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = event.target.value.replace(/\D/g, "");
        if(value > 20000) {
            alert("The value cannot exceed 20000");
            setNewBudget(value);
            return;
        }
        if(value < remaining) {
            alert("The budget cannot can't be less than spending");
            setNewBudget(value);
            return;
        }
        
        setNewBudget(value);
    }
    return (
        
        
<div className='alert alert-secondary'>
<span>Budget: {props.currpfx}{budget}</span>
<div className="d-flex flex-row mt-2">
<div className=" sm-3" style={{ marginLeft: '' , size: 10}} >
                <label className="input-group-text" htmlFor="inputGroupSelect01" style={{ padding: '4px'}}>{props.currpfx}</label>
                  </div>
                 <div className="sm-9"><input type="number" prefix ={props.currpfx} step="5" value={newBudget} onChange={handleBudgetChange} ></input>
</div></div></div>

    );
};
export default Budget;
