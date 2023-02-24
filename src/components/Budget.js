import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from '../components/ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>          
            <span>Budget: £</span>
                <input
                    contentEditable='true'
                    type ='number'
                    label='TextField'
                    InputProps={{
                        inputProps: {
                            max:20000, min:{ExpenseTotal}
                            }
                        }}
                    value= {budget}
                    id='budget'
                    style={{ marginLeft: '0' , size: 10}}
                    onChange={(event) => Budget(event.target.value)}>
                </input>
            
        </div>
    );
};
export default Budget;
