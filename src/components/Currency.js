import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown'; 
 
const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch} = useContext(AppContext);
  
  const updateCurrency = (event) => {
    /*console.log(currency+"..2.."+event.target.value);
    */
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value[0],
        });
    setCurrency(event.target.value);
    return;
  }
  
  return (
  <div className='btn-group' >
    <Dropdown className='btn btn-success btn-lg'>
      <Dropdown.Toggle variant="success">
        Currency({currency})
      </Dropdown.Toggle>
      <Dropdown.Menu onClick={(event) => updateCurrency(event)}>
        <Dropdown.Item as='button' value='£ Pound'>£ Pound</Dropdown.Item>
        <Dropdown.Item as='button' value='$ Dollar'>$ Dollar</Dropdown.Item>
        <Dropdown.Item as='button' value='€ Euro'>€ Euro</Dropdown.Item>
        <Dropdown.Item as='button' value='₹ Ruppee'>₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  
  );
};

export default Currency;