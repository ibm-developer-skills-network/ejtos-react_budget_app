import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const [showOrangeFrame, setShowOrangeFrame] = useState(false);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    if (props.cost + expense.cost > 1998) {
      setShowOrangeFrame(true);
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    if (props.cost - expense.cost > 1998) {
      setShowOrangeFrame(true);
    } else {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    }
  };

  const frameStyle = showOrangeFrame ? 'orange-frame' : '';

  return (
    <>
      <style type="text/css">
        {`
          .btn-container {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            width: 2rem;
            height: 2rem;
            font-size: 1rem;
            border-radius: 30px;
          }
          .btn-container.increase {
            background-color: #4eac5a;
          }
          .btn-container.increase:hover {
            cursor: pointer;
          }
          .btn-container.decrease {
            background-color: #b12519;
          }
          .btn-container.decrease:hover {
            cursor: pointer;
          }
          .orange-frame {
            border: 2px solid orange;
            border-radius: 5px;
          }
        `}
      </style>
      <tr className={frameStyle}>
        <td>{props.name}</td>
        <td>
          {currency}
          {props.cost}
        </td>
        <td>
          <div className="btn-container increase" onClick={(event) => increaseAllocation(props.name)}>
            <h1>+</h1>
          </div>
        </td>
        <td>
          <div className="btn-container decrease" onClick={(event) => decreaseAllocation(props.name)}>
            <h1>-</h1>
          </div>
        </td>
        <td>
          <TiDelete size="1.5em" onClick={handleDeleteExpense} />
        </td>
      </tr>
    </>
  );
};

export default ExpenseItem;

