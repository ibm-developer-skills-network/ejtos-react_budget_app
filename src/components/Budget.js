import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        if(document.getElementById("myWishText").value < 20000){
            setNewBudget(event.target.value);
        }else{
            alert("The value cannot exceed £20000");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} id="myWishText" onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
