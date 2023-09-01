import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                        {/* Add Budget component here under */}        

                        {/* Add Remaining component here under */}        

                        {/* Add ExpenseTotal component here under */}        
                       
                        {<ExpenseList />}         

                        {/* Add ExpenseItem component here under */}        

                        {<AllocationForm />}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
