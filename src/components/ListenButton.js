import React from "react";

import microImg from "../images/micro.png";

const listenButton = ({ listenAnimate, listen }) => {
  return (
    <img
      src={microImg}
      alt=""
      className={`listen ${listenAnimate ? "animate" : ""}`}
      onClick={() => listen()}
      title="Click to listen the word"
    />
  );
};

export default listenButton;
