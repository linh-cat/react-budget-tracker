import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBuget";

function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };
  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });

    setIsEdit(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEdit ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
}

export default Budget;
