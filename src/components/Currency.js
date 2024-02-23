import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const currencies = [
  { name: "Dollar", symbol: "$" },
  { name: "Pound", symbol: "£" },
  { name: "Euro", symbol: "Є" },
  { name: "Rupee", symbol: "₹" },
];

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div class="form-group row">
        <label for="budget" class="col-sm-4 col-form-label">
          Currency
        </label>
        <div class="col-sm-8">
          <select
            class="form-control"
            id="currency"
            onChange={handleCurrencyChange}
          >
            {currencies.map((c) => {
              return (
                <option
                  selected={currency === c.symbol}
                  value={c.symbol}
                >{`${c.symbol} ${c.name}`}</option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Currency;
