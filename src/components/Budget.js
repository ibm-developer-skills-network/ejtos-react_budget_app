import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
  const {budget} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleChange = (event) => {
    setNewBudget(event.target.value);
  }

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
      <input type="number" steps="10" value={newBudget} onChange={handleChange}></input>
    </div>
    )
  };
export default Budget;
