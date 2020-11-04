import React from "react";

import trophyImg from "../images/trophy.png";

import { useStoreState } from "easy-peasy";

const Trophy = () => {
  const { points, levels, level, nextLevel } = useStoreState((state) => state);

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
