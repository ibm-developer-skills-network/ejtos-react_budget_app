import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                //Add Budget component here under
        
                //Add Remaining component here under
        
                //Add ExpenseTotal component here under
        
                //Add ExpenseList component here under
        
                //Add ExpenseItem component here under
        
                //Add AllocationForm component here under

            </div>
        </AppProvider>
    );
};
export default App;
