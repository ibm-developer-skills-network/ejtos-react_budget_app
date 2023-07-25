import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
   // const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState(960);
    const { expenses } = useContext(AppContext);
    const budgetRef = useRef('');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    useEffect(() => {
        budgetRef.current = budget
    });

    const handleChange = (e) =>
    {
       
      if(budgetRef.current < e.target.value){
        setBudget(parseInt(e.target.value) + 9); 
      } else {
        setBudget(parseInt(e.target.value) - 9);
      }

      budgetRef.current = parseInt(e.target.value);
  
       if(parseInt(e.target.value) > 20000)
       {
            alert("The value cannot exceed £20,000");
            setBudget(3000);
            return;
       }

       if(parseInt(e.target.value) < totalExpenses)
       {
            alert("Budget cannot be reduced lower than spending amount");
            setBudget(3000);
            return;
       }


      //  if(budget < expenses)
      //  {
         //   alert("The value cannot be less than £" + expenses);
         //   setBudget("");
          //  return;
       // }

        //const value = Math.max(min, Math.min(max, Number(event.target.value)));
        
        //setBudget(e.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{size: 10}}
                onChange={handleChange}>
           </input>
        </div>
    );
};
export default Budget;
