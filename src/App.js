import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='container'>Company's budget allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget></Budget>
                    </div>
                    <div className='col-sm'>
                        <Remaining></Remaining>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal></ExpenseTotal>
                    </div>
                    <div className='col-sm' style={{textAlign: 'center'}}>
                        <Currency></Currency>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row'>
                    <div className='col-sm'>
                        <ExpenseList></ExpenseList>
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm></AllocationForm>
                    </div>
                </div>
                {/* Add the code here to add the components          */}
            </div>
        </AppProvider>
    );
};
export default App;