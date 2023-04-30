import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Employees = () => {
    const { Employees } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Employees: 100{Employees}</span>
        </div>
    );
};
export default Employees;