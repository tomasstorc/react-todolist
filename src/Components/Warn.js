import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Zoom } from "@mui/material";

const Warn = ({ setWarn }) => {
  const [open, setOpen] = useState(true);
  return (
    <Zoom in={open}>
      <div className="warn">
        You need to fill a task
        <CloseIcon
          className="close"
          onClick={() => {
            setWarn((prev) => !prev);
            setOpen((prev) => !prev);
          }}
        />
      </div>
    </Zoom>
  );
};

export default Warn;
