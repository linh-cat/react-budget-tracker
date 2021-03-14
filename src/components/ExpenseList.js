import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses } = useContext(AppContext);

  const [filter, setFilter] = useState(expenses || []);

  useEffect(() => {
    setFilter(expenses);
  }, [expenses]);

  const handleChange = (e) => {
    const searchResult = expenses.filter((filteredExpense) => {
      return filteredExpense.name.toLowerCase().includes(e.target.value);
    });
    setFilter(searchResult);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search here...!"
        onChange={handleChange}
      />
      <div className="list-group my-3">
        {filter.map((item) => {
          return (
            <ExpenseItem key={item.id} name={item.name} cost={item.cost} />
          );
        })}
      </div>
    </>
  );
}

export default ExpenseList;
