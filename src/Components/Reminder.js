import React from "react";

const Reminder = ({ setPopup }) => {
  return (
    <div className="reminder">
      Do you want to set this task as an important?
      <div className="choiceFlex">
        <span className="yes">Yes</span>
        <span
          className="no"
          onClick={() => {
            setPopup((prev) => !prev);
          }}
        >
          No
        </span>
      </div>
    </div>
  );
};

export default Reminder;
