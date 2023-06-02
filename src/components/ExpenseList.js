import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expenses) => (
                    <ExpenseItem 
                    id={expenses.id} 
                    key={expenses.id} 
                    name={expenses.name}
                    cost={expenses.cost} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;