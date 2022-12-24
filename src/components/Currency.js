import { useDispatch, useSelector } from "react-redux";
import { ChangeCurrencyAction } from "../action";

const CurrencyComponent = () => {
  const currentCurrencyObject = useSelector(state => state.CurrencyReducer.currentCurrency);
  const availableCurrencies = useSelector(state => state.CurrencyReducer.availableCurrencies);
  const dispatch = useDispatch();

  const currentCurrencyKey = Object.keys(currentCurrencyObject)[0]

  const handleCurrencyChange = (event) => {
    dispatch(ChangeCurrencyAction(event.target.value));
  }

  return (
    <div class="col p-2">
      <select
        className="form-control"
        id="currency-selector"
        value={currentCurrencyKey}
        onChange={handleCurrencyChange}
      >
        {availableCurrencies.map(c => (
          <option label={`(${Object.values(c)[0]}) ${Object.keys(c)[0]}`} value={Object.keys(c)[0]}></option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyComponent;