import CloseIcon from "@mui/icons-material/Close";

const Task = ({ task, removeTask, setPopup }) => {
  return (
    <div
      className="task"
      onDoubleClick={() => {
        setPopup((prev) => !prev);
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
