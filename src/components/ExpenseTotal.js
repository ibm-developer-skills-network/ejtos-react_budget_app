
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
       <div>

       <div className='alert alert-primary'>
            <span>Spent so far: ${totalExpenses}</span>
        </div>
      
        <div className='alert alert-success'>
        <label className="alert alert-success" htmlFor="inputGroupSelect02">currency selected $</label>
        <select className="custom-select" id="inputGroupSelect01" >
                        <option defaultValue>Choose...</option>
                        <option value=" Dollar" name="marketing">Dollar</option>
                <option value="Pound" name="sales">Pound</option>
                <option value="Euro" name="finance">Euro</option>
                <option value="Ruppe" name="hr">Ruppe</option>
              
                  </select>
        </div>
        </div>
    );
};
export default ExpenseTotal;