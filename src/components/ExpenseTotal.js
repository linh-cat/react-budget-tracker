import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseTotal() {
  const { expenses } = useContext(AppContext);
  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return <div className="alert alert-warning p-4">Spent sofar: {total}$</div>;
}

export default ExpenseTotal;
