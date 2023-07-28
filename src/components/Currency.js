
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 


const Currency = (props) => {
    const {dispatch} = useContext(AppContext);
    const [currency, setCurrency] = useState(''); 

    const customStyles = {
        option: (base, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...base,
          backgroundColor: isFocused ? "red" : "blue",
        };
      }
    };

    const styles = {
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "red" : "blue",
          "&:hover": {
            ...styles
          }
        })
      };
    
      const changeCurrency = (name) =>
      {
          dispatch({
              type: 'CHG_CURRENCY',
              payload: currency
          })
      }
  

    return (

        <div className="input-group mb-3" style={{ marginLeft: '2rem'}}>
            <div>
                <label style={{backgroundColor: '#32CD32'}} className="input-group-text" htmlFor="inputCurr">Currency</label>
            </div>
            <select styles={styles}  id="inputCurr" onChange={(event) => changeCurrency(props.name)}>
                <option value="dollar" name="dollar">$ Dollar</option>
                <option value="pound" name="pound">£  Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
            </select> 
       </div> 
 
    );
};
export default Currency;