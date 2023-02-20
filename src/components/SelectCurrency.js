import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function AllocationForm(props){
    const { currency, setCurrency } = useContext(AppContext);

    const handleChange = (e) => {
        const currencyNewValue = e.target.value
        setCurrency(currencyNewValue)
    }

    return (
        <select onChange={handleChange} className="form-select">
            <option value="" defaultValue hidden>Change currency({currency})</option>
            <option value='$'>$ Dollar</option>
            <option value='£'>£ Pound</option>
            <option value='€'>€ Euro</option>
            <option value='₹'>₹ Ruppee</option>
        </select>
    );
};

