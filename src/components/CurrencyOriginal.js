import { useDispatch, useSelector } from "react-redux";
import { ChangeCurrencyAction } from "../action";

const CurrencyComponent = () => {
  const currentCurrencyObject = useSelector(state => state.CurrencyReducer.currentCurrency);
  const availableCurrencies = useSelector(state => state.CurrencyReducer.availableCurrencies);
  const dispatch = useDispatch();

  const handleCurrencyChange = (event) => {
    dispatch(ChangeCurrencyAction(event.target.value));
  }

  return (
    <div class="col">
      <label htmlFor="currency-selector">Select a currency:</label>
      <select
        className="form-control"
        id="currency-selector"
        value={Object.keys(currentCurrencyObject)[0]}
        onChange={handleCurrencyChange}
      >
        {availableCurrencies.map(c => (
          <option label={`Currency: ${Object.keys(c)[0]}`} key={Object.keys(c)[0]} value={Object.keys(c)[0]}>{Object.values(c)[0]}</option>
        ))}
      </select>
      <p>Selected currency: {Object.keys(currentCurrencyObject)[0]}</p>
    </div>
  );
};

export default CurrencyComponent;