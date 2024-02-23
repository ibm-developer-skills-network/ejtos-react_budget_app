import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
// import components here
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import AllocationForm from "./components/AllocationForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="my-3">Company's Budget Allocation</h1>
        <div className="row my-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="my-3">Allocation</h3>
        <ExpenseList />
        <h3 className="my-3">Change Allocation</h3>
        <AllocationForm />
      </div>
    </AppProvider>
  );
};
export default App;
