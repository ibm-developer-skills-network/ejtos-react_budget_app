import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [value, setValue] = useState(budget);

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
