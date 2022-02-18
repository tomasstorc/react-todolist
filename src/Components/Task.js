import CloseIcon from "@mui/icons-material/Close";

const Task = ({ id, task, removeTask, setImportant, isImportant }) => {
  return (
    <div
      className="task"
      style={{
        borderLeft: isImportant ? "5px solid red" : "",
      }}
      onDoubleClick={() => {
        setImportant(id);
      }}
    >
      {task}
      <CloseIcon
        className="close"
        onClick={() => {
          removeTask(task);
        }}
      />
    </div>
  );
};

export default Task;
