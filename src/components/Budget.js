import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
  //  const { setCost } = useContext(AppContext);
  function handleChange(event) {
    console.log(event.target.value);
    if(event.target.value > 20000) {
        alert("The value cannot exceed 20000  £");
    }
    if(event.target.value < 960) {
            alert("You cannot reduce budget value lower than spending");
    }
   }
    return (
        <div className='alert alert-secondary'>
            Budget: £
            <input
                        required='required'
                        type='number'
                        id='budget'
  //                      value={5000}
                        style={{ marginLeft: '0rem' , size: 10}}
  //                    onChange={(event) => setCost(event.target.value)}>
                        onChange={handleChange}  
                        />
        </div>
    );
};
export default Budget;
