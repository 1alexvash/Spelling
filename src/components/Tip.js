import React from "react";

const Tip = ({ listenAnimate }) => {
  return (
    <div className={`tip ${listenAnimate ? "animate" : ""}`}>
      Click to listen the word again
    </div>
  );
};

export default Tip;
