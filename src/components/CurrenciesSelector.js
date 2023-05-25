import { useContext } from "react";
import { actions } from "../context/actions";
import { AppContext } from "../context/AppContext";
import "./style.css";
const options = [
  {
    value: "$",
    label: "$ Dollar",
  },
  {
    value: "£",
    label: "£ Pound",
  },
  {
    value: "€",
    label: "€ Euro",
  },
  {
    value: "₹",
    label: "₹ Rupee",
  },
];

export const CurrenciesSelector = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleChange = (e) => {
    dispatch(actions.chgCurrency(e.target.value));
  };

  return (
    <select
      className="form-select select"
      aria-label="Default select example"
      onChange={handleChange}
      value={currency}
    >
      {options.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
