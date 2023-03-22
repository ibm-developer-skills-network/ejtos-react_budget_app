import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    const  { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    

    const changeBudget = () => {

        const budget = 10;
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={props.budget}
                        step={10}
                        style={{ marginLeft: '5rem' , size: 10}}
                        onChange={(event) => changeBudget(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;