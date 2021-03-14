import React from "react";
import { TiDelete } from "react-icons/ti";

function ExpenseItem(props) {
  return (
    <div className="list-group-item d-flex justify-content-between">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill mr-3">
          $ {props.cost}
        </span>
        <TiDelete size="1.5em" />
      </div>
    </div>
  );
}

export default ExpenseItem;
