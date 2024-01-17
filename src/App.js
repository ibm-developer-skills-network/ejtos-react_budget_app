import React ,{ useState }from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Drop from './components/Drop';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
const App = () => {
    
        const [parentSelectedOption, setParentSelectedOption] = useState('$');
      
        const handleChildSelect = (selectedOption) => {
          setParentSelectedOption(selectedOption);
        };
    return (
        <AppProvider>
           <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget selectedOption={parentSelectedOption}/>
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget selectedOption={parentSelectedOption}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal selectedOption={parentSelectedOption}/>
                    </div>
                    <div className='col-sm'>
                        <Drop onSelect={handleChildSelect}/>
                    </div>

                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList selectedOption={parentSelectedOption}/>
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm selectedOption={parentSelectedOption}/>
                    </div>
                </div>
            </div>
        </AppProvider>
        </AppProvider>
    );
};
export default App;
