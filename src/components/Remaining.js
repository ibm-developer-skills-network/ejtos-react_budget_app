// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const Remaining = () => {
//     const { expenses, budgeting } = useContext(AppContext);

//     const totalExpenses = expenses.reduce((total, item) => {
//         return (total = total + item.cost);
//     }, 0);

//     const alertType = totalExpenses > budgeting ? 'alert-danger' : 'alert-success';

//     return (
//         <div className={`alert ${alertType}`}>
//             <span>Remaining: Rp {budgeting - totalExpenses}</span>
//         </div>
//     );
// };

// export default Remaining;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget,currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
