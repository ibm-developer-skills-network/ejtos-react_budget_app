import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container bg-light'>
                {/* Add the code here to add the components*/}
                <div className='text-center'>
                    <img src='/FD_Header.png' alt='FD_logo' width='50px'/>
                </div>
                <div className='text-center bg-danger text-light mt-1'>
                    <h1>Fay's Dalgona Budget Allocation</h1>
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                </div>
                <h3 className='mt-2 bg-secondary text-light'>Allocation</h3>
                <div className='row'>
                    <div className='col-sm bg-light'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-1 bg-secondary text-light'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm bg-light'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
