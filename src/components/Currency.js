import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [name, setName] = useState('$');
    const { dispatch } = useContext(AppContext);
    const currencyChange = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: name
        });
    }
    return (
        <div className='d-flex gap-1'>
            <select className="custom-select alert alert-success" id="inputGroupSelect01" onChange={e => { setName(e.target.value) }}>
                <option value="$" name="dollar" defaultValue>Currency ($ Dollar)</option>
                <option value="£" name="pound">Currency (£ Pound)</option>
                <option value="€" name="euro">Currency (€ Euro)</option>
                <option value="₹" name="ruppee">Currency (₹ Ruppee)</option>
            </select>
            <button onClick={currencyChange} className="btn btn-success" style={{ "height": "64px" }}>
                Set
            </button>
        </div>
    );
};
export default Currency;