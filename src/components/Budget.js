import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from '../components/ExpenseTotal';

const Budget = () => {
    const { budget, setBudget, Location } = useContext(AppContext);
   
    return (
        <div className='alert alert-secondary'>          
            <span>Budget:{Location}</span>
                <input
                        contentEditable='true'
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '0' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}
                        InputProps={{
                            inputProps: {
                            max:20000, min:{ExpenseTotal}
                            }
                        }}>              
                </input>
                    
                   
                
            
        </div>
    );
};
export default Budget;
