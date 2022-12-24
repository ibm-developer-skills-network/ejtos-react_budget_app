import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// Add code to import the components
import BudgetComponent from './components/Budget';
import RemainingComponent from './components/Remaining';
import ExpenseTotalComponent from './components/ExpenseTotal';
import CurrencyComponent from './components/Currency';
import ExpenseListComponent from './components/ExpenseList';
import AllocationFormComponent from './components/AllocationForm';

const App = () => {
    
    return (
        <div class='container mt-3'>
            <h1>Company's Budget Allocation</h1>
            <div class="budget-overview-div row align-items-start mt-5 mb-4">
                <BudgetComponent/>
                <RemainingComponent/>
                <ExpenseTotalComponent/>
                <CurrencyComponent/>
            </div>
            <div class="row align-items-start">
                <ExpenseListComponent/>
            </div>
            <div class="row align-items-end">
                <AllocationFormComponent/>
            </div>
    </div>
)};

export default App;

/* 

    return (
        <div class='container'>
            <h1>Company's Budget Allocation</h1>
            <div class="budget-overview-div row align-items-start">
                <BudgetComponent/>
                <RemainingComponent/>
                <ExpenseTotalComponent/>
                <CurrencyComponent/>
            </div>
            <div class="row align-items-start">
                <ExpenseListComponent/>
            </div>
            <div class="row align-items-end">
                <AllocationFormComponent/>
            </div>
    </div>

)};

*/
