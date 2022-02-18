import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Zoom } from "@mui/material";

const Warn = ({ setWarn }) => {
  return (
    <Zoom in={true}>
      <div className="warn">
        You need to fill a task
        <CloseIcon
          className="close"
          onClick={() => {
            setWarn((prev) => !prev);
          }}
        />
      </div>
    </Zoom>
  );
};

export default Warn;
