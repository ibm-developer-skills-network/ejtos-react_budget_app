import React, { useContext , useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
// eslint-disable-next-line
    const { budget } = useContext(AppContext);
    const [cost, setCost] = useState('');
        return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        id='buget'
                        value={cost}
                        style={{size: 10}}
                        step='10'
                        onChange={(event) => setCost(event.target.value)}>
                        </input>
        </div>
    );
    // eslint-disable-next-line
    const alertType = cost > '20000' ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Budget: £</span>
        </div>
    );
};
export default Budget;
