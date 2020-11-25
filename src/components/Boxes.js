import React from "react";

const Boxes = ({ inputWord, randomWord }) => {
  const squize = inputWord === "" ? true : false;

  return (
    <div className={`boxes ${squize ? "squize" : ""}`}>
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
