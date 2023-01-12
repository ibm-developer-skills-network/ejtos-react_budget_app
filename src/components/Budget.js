import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { currency } = useContext(AppContext);
    const { budget,dispatch,expenses } = useContext(AppContext);
    const changeBudget = (val)=>{
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        
        
        if(val<totalExpenses) {
            alert("You cannot reduce the budget that is already allocated!");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
            }
    }


return (
        <div className='alert alert-secondary'>
            
            <span>Budget: </span>{currency}<span><input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input></span>
            
        </div>

    );
};

export default Budget;