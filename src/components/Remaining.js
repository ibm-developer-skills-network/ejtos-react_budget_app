import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Budget } from '../components/Budget';

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const [setBudget] = useState('');
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);
  const remaining = budget - totalExpenses;

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);
    if (Budget < remaining) {
      alert(`The value cannot exceed remaining funds £{remaining}`);
    } else {
      setBudget(newBudget);
    }
  };

  return (
    <div className="alert alert-light">
      <span>Remaining: £{remaining}</span>
    </div>
  );
};

export default Remaining;
