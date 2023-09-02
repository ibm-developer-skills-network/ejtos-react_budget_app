import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import CurrencyController from './components/CurrencyController';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                        {<Budget/>}        

                        {<Remaining/>}        

                        {<ExpenseTotal/>}        
                       
                        {<CurrencyController/>}         

                        {<ExpenseList />}        

                        {<AllocationForm />}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
