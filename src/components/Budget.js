import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [value, setValue] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    const handleChange = (event) => {
        setValue(parseInt(event.target.value));
        if (event.target.value > value){
            setValue(value + 10);
            } 
        else {
            setValue(value - 10);
              }

        if (value > 20000){
                alert("The budget cannot exceed 20,000 £");
                setValue(value - 10);
            }
        if (value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
            }
        }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={value}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={handleChange}
                        >
                    </input>
            </span>
        </div>
    );
};
export default Budget;
