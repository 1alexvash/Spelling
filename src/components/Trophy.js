import React from "react";

import trophyImg from "../images/trophy.png";

const Trophy = ({ progress }) => {
  return (
    <div className="trophy">
      <img src={trophyImg} alt="" />
      <div className="bar">
        <div className="progress" style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
};

export default Trophy;
