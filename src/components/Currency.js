import React, { useContext } from 'react';
import { AppContext} from '../context/AppContext';
const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    return (
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between"> Currency {
            <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.val)}>
                <option value="£">£ Pound</option>
                <option value="€">£ Europe</option>
                <option value="₹">₹ Ruppee</option>
                <option value="$">$ Dollar</option>
            </select>
        }
        </div>
    );
};
export default Currency;