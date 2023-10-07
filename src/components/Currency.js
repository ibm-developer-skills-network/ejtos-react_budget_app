import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch  } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

    

  return (
        <div style = {{borderRadius: '5px', color:'white', backgroundColor: 'lightgreen', height: '50px', width: '200px'}}  > Currency({ 
      <select name="currency" id="currency" style = {{color: 'white', borderColor: 'lightgreen',  marginTop: '1rem', backgroundColor: 'lightgreen'}} onChange={event=>changeCurrency(event.target.value)}>
        <option value="$" style = {{ color: 'white', }}>$ Dollar</option>
        <option value="£" style = {{color: 'white'}}>£ Pound</option>
        <option value="€"style = {{color: 'white'}}> € Euro</option>
        <option value="₹" style = {{color: 'white'}}>₹ Ruppee</option>
      </select>	
      })
    </div>


    );
};

export default Currency;
