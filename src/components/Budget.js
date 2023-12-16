import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  useEffect(() => {
    setNewBudget(budget);
  }, [budget]);

  const handleBudgetChange = (event) => {
    const updatedBudget = parseInt(event.target.value, 10);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    if (updatedBudget >= totalExpenses) {
      setNewBudget(updatedBudget);
      dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
    } else {
      alert('Cannot decrease budget below the total allocated expenses!');
      setNewBudget(budget);
    }
  };

  const currencyPrefix = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    INR: '₹',
    // Add more currency prefixes as needed
  };

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {currencyPrefix[currency]}{newBudget}
      </span>
      <input
        type='number'
        step='10'
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
