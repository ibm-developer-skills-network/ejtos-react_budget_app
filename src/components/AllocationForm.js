import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [curren, setCurren] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert(`The value cannot exceed remaining funds  ${curren}`+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }


      if(action === "Dollar"){

           dispatch({
                type:'CHG_CURRENCY',
                payload:curren,
              });
       } else if (action === "Pound") {
             dispatch({
                type:'CHG_CURRENCY',
                payload:curren,
              });
       } else if (action === "Ruppee"){

             dispatch({
                type:'CHG_CURRENCY',
                payload:curren,
              });
       } else {
            dispatch({
                type:'CHG_CURRENCY',
                payload:curren,
              });
 

     }
             



    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>
                  
                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => {if (event.target.value === 'Dollar') 
                                                                                                   setCurren('$')
                                                                                                   setAction(event.target.value)
                                                                                                  else if (event.target.value === 'Pound') 
                                                                                                   setCurren('£')
                                                                                                   setAction(event.target.value)
                                                                                                  else if (event.target.value === 'Ruppee') 
                                                                                                   setCurren('₹')
                                                                                                   setAction(event.target.value)
                                                                                                  else 
                                                                                                   setCurren('€')
                                                                                                   setAction(event.target.value)
                                                                                                    }}>
                        <option defaultValue>Dollar</option>
                        <option value="Pound" name="Pound"> Pound</option>
                <option value="Euro" name="Euro">Euro</option>
                <option value="Ruppee" name="Ruppee">Ruppee</option>
                 </select>


                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;


