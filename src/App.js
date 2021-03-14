import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddfromExpense from "./components/AddfromExpense";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="my-3 text-center">My Budget Planner</h1>
        <div className="row">
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
        <h2 className="text-center">Expenses</h2>

        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <AddfromExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
