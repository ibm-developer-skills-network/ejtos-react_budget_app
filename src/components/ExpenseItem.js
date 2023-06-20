import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  // Function to handle deleting an expense
  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  // Function to increase the allocation of an expense
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  // Function to decrease the allocation of an expense
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  const otherCellCosts = [200, 300, 400, 150]; // Example costs of other cells
  const isHighlighted = props.cost - Math.max(...otherCellCosts) >= 250;

  // Function to show a colored frame and a popup message if the condition is met
  const showPopupMessage = () => {
    if (isHighlighted) {
      alert(`Expense cost condition: ${props.cost - Math.max(...otherCellCosts)} >= 250`);
    }
  };

  return (
    <>
      <style type="text/css">
        {`
          .red-orange-frame {
            position: relative;
          }
          .red-orange-frame::after {
            content: '';
            position: absolute;
            top: -6px;
            left: -93px;
            right: 6px;
            bottom: -6px;
            width: 85%;
            border: 6px solid #ff5349;
            box-sizing: border-box;
            pointer-events: none;
          }

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
            background-color: #4eac5a; /* Custom increase button color */
          }
          .btn-container.increase:hover {
            cursor: pointer;
          }
          .btn-container.decrease {
            background-color: #b12519; /* Custom decrease button color */
          }
          .btn-container.decrease:hover {
            cursor: pointer;
          }
        `}
      </style>
      <tr>
        <td>{props.name}</td>
        <td className={isHighlighted ? 'red-orange-frame' : ''} onClick={showPopupMessage}>
          {currency}
          {props.cost}
        </td>
        <td>
          <div className="btn-container increase" onClick={() => increaseAllocation(props.name)}>
            <h1>+</h1>
          </div>
        </td>
        <td>
          <div className="btn-container decrease" onClick={() => decreaseAllocation(props.name)}>
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
