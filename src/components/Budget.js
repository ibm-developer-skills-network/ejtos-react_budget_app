import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    const { budget } = useContext(AppContext);
    const [ setCost] = useState('');
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        step={10}
                        value={budget}
                        onChange={(event) => setCost(event.target.value)}>
              </input>   
        </div>
    );
};
export default Budget;