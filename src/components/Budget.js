//Import AppContext and useContext Hook
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

//Create Arrow Function Method
const Budget = () => {

    //Use budget element from AppContext
    const {budget} = useContext(AppContext);

    //Return grey-colored div with text and budget elements displayed
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};

//Allow other files to access Budget.js
export default Budget;