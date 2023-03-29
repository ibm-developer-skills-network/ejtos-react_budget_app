import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses,currency } = useContext(AppContext);

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
           <span> Budget:{currency}<input 
            type="number" 
            step="10" 
           style={{ alignContent:'center'  , size:10}}
            value={budget}
             onInput={(event)=>changeBudget(event.target.value)}></input>
			 </span>
		</div>
	);
};

export default Budget;