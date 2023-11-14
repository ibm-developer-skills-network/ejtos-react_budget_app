import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const HandleCurrencyChange = (event) => {
    // the issue is reciving the event param 
    // I also think that the problem is something to do with using event.target.value when it does not exist because an option has not been yet choose 
    if (!event){
    return (
            <p>{event}</p>
    )}
    else{
        return (
            <p>non</p>
    ) 
    }}
    
   // const { dispatch, currency } = useContext(AppContext);
    //const [newCurrency, setNewCurrency] = useState(currency);
/*
    useEffect(() => {
        // Setting newCurrency to '$' when the component mounts
        if ('l' === 'k'){
            setNewCurrency('if');
        }
        else {
            setNewCurrency(event.target.value)
        }
        

        // Dispatch the action to update the context with the new currency
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency, // Directly use '$' here if that's the initial value you want
        });
    }, [dispatch, setNewCurrency, newCurrency, event.target.value]);  // Include missing dependencies

    // Return JSX after the side effect has been applied
    return (
        <p>{newCurrency}</p>
    );
};
*/
export default HandleCurrencyChange;
