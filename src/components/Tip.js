import React from "react";

const Tip = ({ listenAnimate }) => {
  return (
    <div className={`tip ${listenAnimate ? "animate" : ""}`}>
      Click to listen
    </div>
  );
};

export default Tip;
