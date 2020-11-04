import React from "react";

import trophyImg from "../images/trophy.png";

const Trophy = ({ points }) => {
  const levels = [0, 10, 20, 50, 75, 100, 150, 200, 300, 500];
  let level = 1;

  for (let i = 0; i < levels.length; i++) {
    if (points >= levels[i]) {
      level = i + 1;
    }
  }

  return (
    <div className="trophy">
      <img src={trophyImg} alt="" />
      <div className="level" title="Current level:">
        {level}
      </div>
      <div className="bar">
        <div className="progress" style={{ width: points + "%" }}></div>
      </div>
    </div>
  );
};

export default Trophy;
