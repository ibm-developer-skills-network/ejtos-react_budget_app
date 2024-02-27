import React, { useState } from 'react';

const CurrencyBuy = () => {
    

  return (
    <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>$ Dollar</option>
        <option value="1">£ Pound</option>
        <option value="2">€ Euro</option>
        <option value="3">₹ Ruppee</option>
      </select>
      <label for="floatingSelectGrid">Currency</label>
    </div>
  </div>

  );
};

export default CurrencyBuy
