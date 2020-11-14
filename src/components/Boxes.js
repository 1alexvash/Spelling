import React from "react";

const Boxes = ({ inputWord, randomWord }) => {
  return (
    <div className="boxes">
      {inputWord.split("").map((letter, index) => (
        <div className="box active" key={index}>
          {letter}
        </div>
      ))}
      {randomWord.split("").map((letter, index) => (
        <div className="box" key={index}>
          ?
        </div>
      ))}
    </div>
  );
};

export default Boxes;
