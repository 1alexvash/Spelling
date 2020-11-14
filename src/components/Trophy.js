import React, { useEffect } from "react";

import trophyImg from "../images/trophy.png";

import { useStoreState, useStoreActions } from "easy-peasy";

const Trophy = () => {
  const { points, levels, currentLevel, nextLevel } = useStoreState(
    (state) => state
  );
  const { playSound } = useStoreActions((actions) => actions);

  function getProgress() {
    const pointsForLevelUp = levels[nextLevel] - levels[currentLevel];
    const levelPoints = points - levels[currentLevel];
    return (levelPoints / pointsForLevelUp) * 100 + "%";
  }

  useEffect(() => {
    return () => {
      playSound("new_level");
    };
  }, [currentLevel, playSound]);

  return (
    <div className="trophy">
      <img src={trophyImg} alt="" />
      <div className="level" title="Current level:">
        {currentLevel + 1}
      </div>
      <div className="bar">
        <div className="progress" style={{ width: getProgress() }}></div>
      </div>
    </div>
  );
};

export default Trophy;
