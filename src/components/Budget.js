/* You are using the Bootstrap Alert classes to give a gray 
background by adding some text and hard coding a value. */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;