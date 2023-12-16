import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  // Calculate remaining budget
  const remainingBudget = budget - totalExpenses;

  // Currency prefix based on the selected currency
  const currencyPrefix = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    INR: '₹',
    // Add more currency prefixes as needed
  };

  // Determine alert type based on remaining budget
  const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currencyPrefix[currency]}{remainingBudget}
      </span>
    </div>
  );
};

export default Remaining;
