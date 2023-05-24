export const getTotalExpenses = (expenses) =>
  expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
