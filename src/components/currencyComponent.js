const HandleCurrencyChange = (event, dispatch) => {
  
  dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });
    

};

export default HandleCurrencyChange;
