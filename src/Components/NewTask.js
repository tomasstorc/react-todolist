import React, { useState } from "react";

const NewTask = ({ addNewTask }) => {
  const [getValue, setValue] = useState("");

  function updateTask(e) {
    setValue(e.target.value);
  }
  return (
    <div className="new-task-container">
      <h2>Add a new task</h2>
      <input type="text" name="taskName" onKeyUp={updateTask} />
      <div
        className="addBtn"
        onClick={() => {
          addNewTask(getValue);
          setValue("");
        }}
      >
        Add task
      </div>
    </div>
  );
};

export default NewTask;
