import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, removeTask, setPopup }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3>
          <Task task={task} removeTask={removeTask} setPopup={setPopup} />
        </h3>
      ))}
    </div>
  );
};

export default Tasks;
