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
            Budget:
            <div className="input-group-prepend" 
                style={{ height:'5px', width: '10px', marginRight: '1rem', marginLeft: '1rem' }}>
            <span className="input-group-text">£</span>
            </div>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        max='20000'
                        step='10'
  //                      value={5000}
                        style={{ marginTop: '-30px', marginLeft: '5rem' , size: 15}}
  //                    onChange={(event) => setCost(event.target.value)}>
                        onChange={handleChange}  
                        />
        </div>
    );
};
export default Budget;
