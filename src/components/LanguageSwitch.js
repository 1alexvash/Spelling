import React from "react";

import britishFlagImg from "../images/british_flag.png";
import americanFlagImg from "../images/american_flag.png";

const LanguageSwitch = () => {
  return (
    <div className="language-switch">
      <img src={britishFlagImg} alt="" />
      <img src={americanFlagImg} alt="" />
    </div>
  );
};

export default LanguageSwitch;
