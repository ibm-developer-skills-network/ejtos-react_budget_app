import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  // return (
  //     <div className='alert alert-secondary dropdown-center'> Location {
  //   <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
  //     <option value="£">£ Pound</option>
  //     <option value="₹">₹ Ruppee</option>
  //     <option value="€">€ Euro</option>
  //     <option value="$">$ USD</option>
  //   </select>	
  //   }	
  // </div>
  // );

  return(
    <div className="dropdown-center">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="Currency" name="Currency" onChange={event=>changeCurrency(event.target.value)}> Currency
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" value="#">Action</a></li>
          <li><a className="dropdown-item" value="#">Action two</a></li>
          <li><a className="dropdown-item" value="#">Action three</a></li>
        </ul>
      </button>
    </div>
  );
};

export default Currency;
