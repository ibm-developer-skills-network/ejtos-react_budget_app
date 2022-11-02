import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                {/* Add the code here to add the components          */}
            </div>
        </AppProvider>
    );
};
export default App;
