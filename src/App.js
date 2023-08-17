import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under

//Code to import Remaining.js
import Remaining from './components/Remaining';

//Code to import from ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';

//Code to import from ExpenseList.js
import ExpenseList from './components/ExpenseList';

//Code to import from ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';

//Code to import from AllocationForm.js
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
                        {/* Add ExpenseList component here under */}         
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                        {/* Add ExpenseItem component here under */}        
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
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
App.js