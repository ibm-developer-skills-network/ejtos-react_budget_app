import React from "react";

import { AppProvider } from "./context/AppContext";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3"></div>
      </div>
    </AppProvider>
  );
};

export default App;
