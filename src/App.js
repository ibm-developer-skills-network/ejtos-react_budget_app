import React from 'react';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';

import { AppProvider } from './context/AppContext';
import CurrencyController from './components/CurrencyController';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>{<Budget/>}</div>        
                    <div className='col-sm'>{<Remaining/>}</div>
                    <div className='col-sm'>{<ExpenseTotal/>}</div>
                    <div className='col-sm'>{<CurrencyController/>}</div>
                </div>
                    <h1 className='mt-3'>Allocation</h1> 
                    {<ExpenseList />}    
                    <h1 className='mt-3'>Change Allocation</h1>     
                    {<AllocationForm />}
            </div>
        </AppProvider>
    );
};
export default App;
