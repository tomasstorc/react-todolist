import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Warn = ({ setWarn }) => {
  return (
    <div className="warn">
      You need to fill a task
      <CloseIcon
        className="close"
        onClick={() => {
          setWarn((prev) => !prev);
        }}
      />
    </div>
  );
};

export default Warn;
