import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

//importing contexts
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Currency />
          </div>
          <h2 className="mt-3">Allocation</h2>
          <div>
            <ExpenseList />
          </div>
          <h2 className="mt-3">Change Allocation</h2>
          <div>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
