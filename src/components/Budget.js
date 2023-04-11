import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const remaining = require("./Remaining")
        if ({ budget } > 20000) {
            alert("The value cannot exceed remaining funds  £"+({ remaining }));
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
