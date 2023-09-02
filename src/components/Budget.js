import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const setBudget = (value) =>{

        if(value > 20000){
            alert(`The budget cannot exceed ${currency}20000.`)
            budget = 20000;
        }

        if(value < totalExpenses) {
            alert(`Budget cannot be reduced below the current expenditure of ${currency}${totalExpenses}.`)
            budget = totalExpenses;
        }

        dispatch({
            type: "SET_BUDGET",
            payload: value
        })
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" class="w-50" id="amountInput" 
                step="10" id="budget fit" onChange={(event)=>setBudget(event.target.valueAsNumber)}
                value={budget}>
            </input>
        </div>
    );
};

export default Budget;