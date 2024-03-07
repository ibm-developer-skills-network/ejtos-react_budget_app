import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
//Code to import Remaining.js
import Remaining from './components/Remaining';

//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';

//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';

//Code to import AllocationForm.js
import AllocationForm from './components/AllocationForm';

//Code to import ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                          // Budget component
                    <div className='col-sm'>
                    <Budget />
                </div>
                        }        

                        {
                           //Remaining component
                    <div className='col-sm'>
                    <Remaining />
                </div>
                        }        

                        {
                            //ExpenseTotal component
                    <div className='col-sm'>
                    <ExpenseTotal />
                </div>
                        }        
                       
                        {
                            //ExpenseList component
                    <div className='col-sm'>
                    <ExpenseList />
                </div>
                        }         

                        {
                            //ExpenseItem component
                    <div className='col-sm'>
                    <ExpenseItem />
                </div>
                        }        

                        {
                            //AllocationForm component
                    <div className='col-sm'>
                    <AllocationForm />
                </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
