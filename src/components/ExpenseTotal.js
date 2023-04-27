import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Budget } from '../components/Budget';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const [showAlert, setShowAlert] = useState(false);

  const handleAddExpense = () => {
    // check if total expenses exceed budget
    if (totalExpenses > Budget) {
      alert('Total expenses exceed the budget.');
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  return (
    <div>
      {showAlert && (
        <div className="alert alert-primary">
          <span>Spent so far: £{totalExpenses}</span>
        </div>
      )}
      <button onClick={handleAddExpense}>Add expense</button>
    </div>
  );
};

export default ExpenseTotal;
