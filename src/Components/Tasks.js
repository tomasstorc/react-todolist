import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, removeTask, setImportant }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <h3>
          <Task
            key={index}
            id={index}
            task={task.name}
            isImportant={task.important}
            removeTask={removeTask}
            setImportant={setImportant}
          />
        </h3>
      ))}
    </div>
  );
};

export default Tasks;
