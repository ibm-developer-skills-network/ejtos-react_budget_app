import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';


const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span> {Currency} <span>{budget}</span>
        </div>
    );
};

export default Budget;
