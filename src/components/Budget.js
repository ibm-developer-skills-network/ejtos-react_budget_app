import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChangeBudget = value => {
        if(value<=20000 && value >= totalExpenses){
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
        else if(value>20000){
            const msg = `The value cannot exceed remaining funds ${currency}20,000`
            alert(msg);
        }
        else {
            alert("You cannot reduce the budget value lower than the spending");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span className="d-flex flex-nowrap">
                <div className="d-flex flex-nowrap" style={{whiteSpace:'nowrap'}}>
                Budget: {currency}
                </div>
                <input
                className="flex-fill"
                required='required'
                type='number'
                id='budget'
                step="10"
                value={budget}
                style={{ marginLeft: '.25rem'}}
                onChange={(event) => handleChangeBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;