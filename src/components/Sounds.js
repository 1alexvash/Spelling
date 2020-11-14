import React from "react";

import soundOn from "../images/sound-on.png";
import soundOff from "../images/sound-off.png";

import { useStoreState, useStoreActions } from "easy-peasy";

const Sounds = () => {
  const { sound } = useStoreState((state) => state);
  const { setSound } = useStoreActions((actions) => actions);

  return (
    <div className="Sounds">
      {sound === "on" ? (
        <img
          src={soundOn}
          className="sound-on"
          onClick={() => setSound("off")}
          alt=""
        />
      ) : (
        <img
          src={soundOff}
          className="sound-off"
          onClick={() => setSound("on")}
          alt=""
        />
      )}
    </div>
  );
};

export default Sounds;
