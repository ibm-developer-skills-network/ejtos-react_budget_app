import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
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
          <h1 className="mt-3">Allocation</h1>
          <div>
            <ExpenseList />
          </div>
          <h1 className="mt-3">Change Allocation</h1>
          <div>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
