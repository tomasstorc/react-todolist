import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import NewTask from "./Components/NewTask";
import Tasks from "./Components/Tasks";

function App() {
  const [taskList, setTaskList] = useState([
    { name: "test", important: false },
    { name: "test2", important: true },
  ]);

  function addNewTask(newTask) {
    setTaskList([...taskList, { name: newTask, important: false }]);
  }

  function setImportant(index) {
    const newTaskList = [...taskList];
    newTaskList[index].important = !newTaskList[index].important;
    setTaskList(newTaskList);
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
        setImportant={setImportant}
      ></Tasks>
      {}
    </div>
  );
}

export default App;
