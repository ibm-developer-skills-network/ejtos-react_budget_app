import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [value, setValue] = useState(budget);
    const handleChange = (event) => {
        const newBudget = event.target.value;
        if(newBudget> 20000) {
            alert("Budget cannot exceed 20000");
        } else {
            setValue(newBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            })
        }     
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}
                <input 
                    required = 'required'
                    type = 'number'
                    step = '10'
                    max = '20000'
                    value = {value}
                    style = {{size: 10}}
                    onChange = {handleChange}>
                </input>
            </span>
        </div>
    );
};
export default Budget;

