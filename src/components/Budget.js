import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>          
            <span>Budget: £</span>
                <input 
                    type ='number' 
                    value= {budget}
                    id='budget'
                    style={{ marginLeft: '0' , size: 10}}
                    onChange={(event) => budget(event.target.value)}>
                </input>
            
        </div>
    );
};
export default Budget;
