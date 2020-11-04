import React from "react";

import trophyImg from "../images/trophy.png";

const Trophy = ({ points }) => {
  const levels = [0, 10, 20, 50, 75, 100, 150, 200, 300, 500];
  let level = null;
  let nextLevel = null;

  for (let i = 0; i < levels.length; i++) {
    if (points >= levels[i]) {
      level = i;
      nextLevel = level + 1;
    }
  }

  function getProgress() {
    const pointsForLevelUp = levels[nextLevel] - levels[level];
    const levelPoints = points - levels[level];
    return (levelPoints / pointsForLevelUp) * 100 + "%";
  }

  return (
    <div className="trophy">
      <img src={trophyImg} alt="" />
      <div className="level" title="Current level:">
        {level + 1}
      </div>
      <div className="bar">
        <div className="progress" style={{ width: getProgress() }}></div>
      </div>
    </div>
  );
};

export default Trophy;
