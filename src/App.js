import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js


// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';

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
                    </div>
                        {/* Add ExpenseList component here under */}         
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                        {/* Add ExpenseItem component here under */}        
                        <div className = 'col-sm'>
                            <ExpenseItem />
                        </div>
                    </div>
                        {/* Add AllocationForm component here under */}        
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm/>
                        </div>
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
