import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
        if ({ budget } > 20000) {
            alert("The value cannot exceed £20000");
            return;
        } else {
            return (
                <div className='alert alert-secondary'>
                    <span>Budget: £{<input type="number" max="20000" />}</span>
                </div>
        );
    };
}
export default Budget;
