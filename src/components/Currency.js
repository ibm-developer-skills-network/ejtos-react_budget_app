import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const [ currency, setCurrency ] = useState('£ Pound');

    const handleCurrencyChange =(e) => {
        setCurrency(e.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value[0],
        });
    }
    
    return (
        <select style={{background: 'lightgreen', padding: '0.6rem', color: 'white'}} 
                onChange={handleCurrencyChange}>
            <option disabled selected> Currency ({currency})</option>
            <option value='$ Dollar'>$ Dollar</option>
            <option value='£ Pound'>£ Pound</option>
            <option value='&#8364; Euro'>&#8364; Euro</option>
            <option value='&#8377; Ruppee'>&#8377; Ruppee</option>
        </select>
    )
}
export default Currency;