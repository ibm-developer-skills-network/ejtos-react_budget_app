import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        {/* Add Remaining component here under */}        
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                        {/* Add ExpenseTotal component here under */}        
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>  
                                    
                        {/* Add ExpenseItem component here under */}         


                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>                   
                        {/* Add ExpenseList component here under */}        
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>  

                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                        {/* Add AllocationForm component here under */}        
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>  
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
