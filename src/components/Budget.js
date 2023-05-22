import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {dispatch } = useContext(AppContext);

    const changeBudget = (val)=>{
            dispatch({
                type: 'CHG_BUDGET',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Budget {
      <input name="Budget" id="Budget" min="2000" max="100" step="10" value="2000">
      onChange={event=>changeBudget(event.target.value)} </input>	
      }	
    </div>
    );
};

export default Budget;