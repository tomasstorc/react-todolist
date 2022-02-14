import React, { useState } from "react";
import Warn from "./Warn";

const NewTask = ({ addNewTask }) => {
  const [getValue, setValue] = useState("");
  const [warn, setWarn] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <div className="new-task-container">
      {warn && <Warn setWarn={setWarn} />}
      <h2>Add a new task</h2>

      <input
        type="text"
        name="taskName"
        value={getValue}
        onChange={handleChange}
      />
      <div
        className="addBtn"
        onClick={() => {
          if (getValue !== "") {
            addNewTask(getValue);
            setValue("");
          } else {
            setWarn((prev) => !prev);
          }
        }}
      >
        Add task
      </div>
    </div>
  );
};

export default NewTask;
