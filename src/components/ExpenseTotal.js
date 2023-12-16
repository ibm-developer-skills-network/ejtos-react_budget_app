import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);

  // Currency prefix based on the selected currency
  const currencyPrefix = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    INR: '₹',
    // Add more currencies as needed
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className='alert alert-primary'>
      <span>
        Spent so far: {currencyPrefix[currency]}{totalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;
