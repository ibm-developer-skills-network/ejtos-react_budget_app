// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

// const AllocationForm = (props) => {
//     const { dispatch,remaining  } = useContext(AppContext);

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [action, setAction] = useState('');

//     const submitEvent = () => {

//             if(cost > remaining) {
//                 alert("The value cannot exceed remaining funds  Rp"+remaining);
//                 setCost("");
//                 return;
//             }

//         const expense = {
//             name: name,
//             cost: parseInt(cost),
//         };
//         if(action === "Reduce") {
//             dispatch({
//                 type: 'RED_EXPENSE',
//                 payload: expense,
//             });
//         } else {
//                 dispatch({
//                     type: 'ADD_EXPENSE',
//                     payload: expense,
//                 });
//             }
//     };

//     return (
//         <div>
//             <div className='row'>

//             <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
//                     <div className="input-group-prepend">
//                 <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
//                 </div>
//                   <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
//                     <option defaultValue>Choose...</option>
//                     <option value="Marketing" name="marketing"> Marketing</option>
//                     <option value="Sales" name="sales">Sales</option>
//                     <option value="Finance" name="finance">Finance</option>
//                     <option value="Human Resource" name="Human Resource">HR</option>
//                     <option value="IT" name="it">IT</option>
//                     <option value="Admin" name="admin">Admin</option>
//                   </select>

//                     <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
//                 <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
//                 </div>
//                   <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
//                         <option defaultValue value="Add" name="Add">Add</option>
//                 <option value="Reduce" name="Reduce">Reduce</option>
//                   </select>

//                     <input
//                         required='required'
//                         type='number'
//                         id='cost'
//                         value={cost}
//                         style={{ marginLeft: '2rem' , size: 10}}
//                         onChange={(event) => setCost(event.target.value)}>
//                     </input>

//                     <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
//                         Save
//                     </button>
//                 </div>
//                 </div>

//         </div>
//     );
// };

// export default AllocationForm;

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
  const { remaining, currency, dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const submitEvent = () => {
    const enteredValue = Number(cost);

    // check if the entered value is a number
    if (Number.isNaN(enteredValue)) {
      alert('Please enter a valid number.');
      return;
    }

    // check if the entered value is an integer number
    if (!Number.isInteger(enteredValue)) {
      alert('Please enter an integer number.');
      return;
    }

    if (cost > remaining) {
      alert('The value cannot exceed remaining funds  £' + remaining);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === 'Reduce') {
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
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {' '}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="Human Resource" name="human resource">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
            <label htmlFor="cost" style={{ marginLeft: '2rem'}}>
              {currency}
            </label>
          </div>
          <input
            placeholder='enter budget value'
            required="required"
            type="number"
            id="cost"
            value={cost}
            style={{marginLeft:"5px", size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{marginLeft: '2rem' }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
