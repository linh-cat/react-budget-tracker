import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

function AddfromExpense() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost("");
  };
  return (
    <>
      <h2 className="text-center">Add Expense</h2>
      <form onSubmit={onSubmit}>
        <div className="row my-2">
          <div className="col-sm col-lg-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required="required"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>
          <div className="col-sm col-lg-4">
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              required="required"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="form-control"
              id="cost"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddfromExpense;
