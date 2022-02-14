import CloseIcon from "@mui/icons-material/Close";
import { Zoom } from "@mui/material";

const Task = ({ task, removeTask }) => {
  return (
    <Zoom in={true}>
      <div className="task">
        {task}
        <CloseIcon
          className="close"
          onClick={() => {
            removeTask(task);
          }}
        />
      </div>
    </Zoom>
  );
};

export default Task;
