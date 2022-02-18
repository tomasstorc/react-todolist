import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import NewTask from "./Components/NewTask";
import Tasks from "./Components/Tasks";
import Reminder from "./Components/Reminder";

function App() {
  const [taskList, setTaskList] = useState(["sample", "task"]);
  const [popup, setPopup] = useState(false);

  function addNewTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  function removeTask(task) {
    const newTaskList = taskList.filter((t) => t !== task);
    setTaskList(newTaskList);
  }
  return (
    <div>
      <Header title="To do list"></Header>
      <NewTask addNewTask={addNewTask}></NewTask>
      <Tasks
        tasks={taskList}
        removeTask={removeTask}
        setPopup={setPopup}
      ></Tasks>
      {popup && <Reminder setPopup={setPopup} />}
      {}
    </div>
  );
}

export default App;
