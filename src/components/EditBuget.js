import React, { useState } from "react";

function EditBuget(props) {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required="required"
        type="number"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        save
      </button>
    </>
  );
}

export default EditBuget;
