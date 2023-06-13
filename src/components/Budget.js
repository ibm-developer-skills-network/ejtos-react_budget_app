import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, totalExpenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (e) => {
    setNewBudget(parseInt(e.target.value));
  };

  const handleSaveBudget = () => {
    if (newBudget < totalExpenses) {
      alert('The budget cannot be lower than the total expenses.');
      setNewBudget(budget);
      return;
    }

    if (newBudget > 20000) {
      alert('The budget cannot exceed 20,000.');
      setNewBudget(budget);
      return;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: newBudget,
    });
  };

  return (
    <div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>Budget: {currency}</span>
      <input
        type='number'
        step={10}
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={handleSaveBudget}
        style={{ width: '180px', marginLeft: '5px' }}
      />
    </div>
  );
};

export default Budget;
