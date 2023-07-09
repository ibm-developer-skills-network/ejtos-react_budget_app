// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// const Budget = (props) => {
//     // const { budget } = useContext(AppContext);
//     const {dispatch,budget} = useContext(AppContext);
//     const [budgets, setBudget] = useState('');
//     return (
//         <div className='alert alert-secondary'>Budget: £{
//             <input
//                 defaultValue= {2000} 
//                 required='required'
//                 type='number'
//                 id='budget'
//                 value={budget}
//                 style={{ marginLeft: '1rem' , size: 10}}
//                 onChange={(event) => setBudget(event.target.value)}>
//             </input>}
//         </div>
//     );
// };
// export default Budget;

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [budgets,setBudget] = useState('');

    const submitEvent = () => {
        let budgets = budget;

        if (budgets > 4000){
            alert("Error broooo!");
            setBudget("");
            return;
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{
                                 <input
                                 required='required'
                                 type='number'
                                 id='budgets'
                                 value={budgets}
                                 style={{ marginLeft: '2rem' , size: 10}}
                                 onChange={(event) => setBudget(event.target.value)}>
                                 </input>   
            }</span>
        </div>
    );
};
export default Budget;

