import React from "react";

const Sounds = ({ sound, soundOn, soundOff, setSound }) => {
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
