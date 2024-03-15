import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';


const ExpenseList = (props) => {
    const {expenses} = useContext(AppContext);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Decrease by 10</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>

            <tbody>
                {
                    expenses.map((expense) => {
                        return <ExpenseItem id={expense.id} 
                                     key={expense.id} 
                                     name={expense.name}
                                     cost={expense.cost}
                                     currency={props.selectedCurrency}/>
                    })
                }
            </tbody>
        </table>
    );
};

export default ExpenseList;