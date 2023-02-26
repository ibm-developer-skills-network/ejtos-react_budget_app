import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
  const {budget,expenses, currency, dispatch} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) =>{
    return (total = total + item.cost);
}, 0);
  const onChangeBudgetHandler = (event) => {
    const enteredValue =  parseInt(event.target.value);

    

    if(enteredValue < totalExpenses) {
      alert("The value of the budget can't be lower than the expense value");
      
    } else  {
      if(enteredValue > BUDGET_MAX_VALUE){
        alert('Please enter a value less than' + BUDGET_MAX_VALUE);
        return;
      }
      dispatch({
        type:'SET_BUDGET',
        payload:enteredValue,
      });
      
    }

  };

  return (
    <div className="alert alert-secondary" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div>
        <label htmlFor="budget">Budget:</label>
      </div>
      <div style={{display:'flex', alignItems:'center'}}>
        <span>{currency}</span>
        <input
          required="required"
          type= "number"
          id="budget"
          value={budget}
          step='10'
          onChange={onChangeBudgetHandler}
          ></input>
      </div>
    </div>
  );

};
export default Budget;