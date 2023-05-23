import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Budget,
  AllocationForm,
  ExpenseTotal,
  ExpenseList,
  Remaining,
} from "./components";

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
          <ExpenseList />
          <AllocationForm />
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
