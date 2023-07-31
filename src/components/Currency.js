
import React, { useContext, useState, useEffect} from 'react';
import { AppContext } from '../context/AppContext'; 


const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const [currency, setCurrency] = useState(''); 

    useEffect(() => {
        //console.log(currency);
        changeCurrency()   
       // currency = {currency}
      },[currency])

     const handleChange = (event) => {
        setCurrency(event.target.value);
        changeCurrency()
      };
    
      const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
      }
  

    return (

        <div className="input-group mb-3" style={{ marginLeft: '2rem'}}>
            <div>
                <label style={{backgroundColor: '#32CD32'}} className="input-group-text" htmlFor="inputCurr">Currency</label>
            </div>
            <select id="inputCurr" onChange={handleChange}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£  Pound</option>
                <option value="€ " name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
       </div> 
 
    );
};
export default Currency;