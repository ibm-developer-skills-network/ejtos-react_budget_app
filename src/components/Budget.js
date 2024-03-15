import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);
    
    const handleBudgetChange = (event) => {
        const budgetValue = event.target.value;

        if( budgetValue < totalExpenses){
            alert('You cannot reduce the budget value lower than the spending!');
        }
        else{
            setNewBudget(budgetValue);
            dispatch({
                type: 'SET_BUDGET',
                payload: budgetValue,
            });
        }

    }

    return (
        <div className='alert alert-secondary'>
            <span> Budget: {props.selectedCurrency}
                <input className='ml-2' type='number' step='10' value={newBudget} onChange={handleBudgetChange}/>
            </span>
        </div>
    );
};

export default Budget;
