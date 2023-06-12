import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div
      className='currency-selector'
      style={{
        backgroundColor: 'lightgreen',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '60px', // Aumentar el valor de altura aquí
      }}
    >
      <label htmlFor='currency-select' style={{ marginRight: '10px' }}>
        Currency:
      </label>
      <div style={{ position: 'relative' }}>
        <select
          id='currency-select'
          value={currency}
          onChange={handleCurrencyChange}
          style={{
            appearance: 'none',
            background: 'lightgreen',
            color: 'white',
            cursor: 'pointer',
            marginRight: '5px',
            border: 'none',
          }}
        >
          <option value='$' style={{ background: 'lightgreen' }}>
            ($ Dollar)
          </option>
          <option value='£' style={{ background: 'lightgreen' }}>
            (£ Pound)
          </option>
          <option value='€' style={{ background: 'lightgreen' }}>
            (€ Euro)
          </option>
          <option value='₹' style={{ background: 'lightgreen' }}>
            (₹ Ruppee)
          </option>
        </select>
        <div
          style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '10px',
          }}
        >
          ▼
        </div>
      </div>
    </div>
  );
};

export default CurrencySelector;
