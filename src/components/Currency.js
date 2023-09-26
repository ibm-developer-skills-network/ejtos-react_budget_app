import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    return(
        <select class="form-select" aria-label="Default select example">
  <option selected>$ Dollar</option>
  <option value="£ Pound">£ Pound</option>
  <option value="€ Euro">€ Euro</option>
  <option value="₹ Ruppee">₹ Ruppee</option>      
</select>
    ); 
};

export default Currency;