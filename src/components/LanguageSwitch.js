import React, { useState } from "react";

import britishFlagImg from "../images/british_flag.png";
import americanFlagImg from "../images/american_flag.png";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("American");

  return (
    <div className="language-switch">
      <img
        src={britishFlagImg}
        className={language === "American" ? "active" : "not-active"}
        alt=""
      />
      <img
        src={americanFlagImg}
        className={language === "British" ? "active" : "not-active"}
        alt=""
      />
    </div>
  );
};

export default LanguageSwitch;
