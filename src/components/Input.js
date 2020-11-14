import React from "react";

const Input = ({ typing, input }) => {
  return (
    <input
      type="text"
      autoFocus
      className="input"
      placeholder="Start typing"
      onChange={(e) => typing(e)}
      ref={input}
    />
  );
};

export default Input;
