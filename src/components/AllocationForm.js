import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
  const { dispatch, remaining, budget, currency } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const currencyPrefix = currency === '$' ? '$' : currency === '£' ? '£' : currency === '€' ? '€' : currency === '₹' ? '₹' : '';

  const submitEvent = () => {
    if (cost === '' || isNaN(cost)) {
      alert('Please enter a valid cost.');
      return;
    }

    const expenseCost = parseInt(cost);
    if (expenseCost > remaining) {
      alert("The value cannot exceed remaining funds: £" + remaining);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: expenseCost,
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
      <div className='row'>
        <div className='col-sm'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Department
              </label>
            </div>
            <select className='custom-select' id='inputGroupSelect01' onChange={(event) => setName(event.target.value)}>
              <option defaultValue>Choose...</option>
              <option value='Marketing' name='marketing'>
                Marketing
              </option>
              <option value='Sales' name='sales'>
                Sales
              </option>
              <option value='Finance' name='finance'>
                Finance
              </option>
              <option value='HR' name='hr'>
                HR
              </option>
              <option value='IT' name='it'>
                IT
              </option>
            </select>
          </div>
        </div>
        <div className='col-sm'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect02'>
                Action
              </label>
            </div>
            <select className='custom-select' id='inputGroupSelect02' onChange={(event) => setAction(event.target.value)}>
              <option defaultValue>Choose...</option>
              <option value='Increase' name='increase'>
                Increase
              </option>
              <option value='Reduce' name='reduce'>
                Reduce
              </option>
            </select>
          </div>
        </div>
        <div className='col-sm'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>{currencyPrefix}</span>
            </div>
            <input
              required='required'
              type='number'
              id='cost'
              value={cost}
              className='form-control'
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
        <div className='col-sm'>
          <button className='btn btn-primary' onClick={submitEvent}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
