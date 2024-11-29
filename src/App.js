import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        /* Add Budget component here */
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        /* Add Remaining component here*/
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }

                    {
                        /* Add ExpenseTotal component here */
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }

                    {
                        /* Add ExpenseList component here */
                        <div className='row'>

                            <div className='col'>
                                <ExpenseList />
                            </div>

                        </div>
                    }

                    {
                    
                    /* Add ExpenseItem component here */
                    <div className='row'>

                            <div className='col'>
                                <ExpenseItem />
                            </div>

                        </div>
                    }

                    {
                        /* Add AllocationForm component here under */
                        <div className='row'>

                            <div className='col'>
                                <br></br>
                                <AllocationForm />
                            </div>

                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
