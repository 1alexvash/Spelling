import React from "react";

import britishFlagImg from "../images/british_flag.png";
import americanFlagImg from "../images/american_flag.png";

import { useStoreState, useStoreActions } from "easy-peasy";

const LanguageSwitch = () => {
  const { language } = useStoreState((state) => state);
  const { setLanguage } = useStoreActions((actions) => actions);

  return (
    <div className="language-switch">
      <img
        src={britishFlagImg}
        className={language === "British" ? "active" : "not-active"}
        onClick={() => setLanguage("British")}
        title="British Pronunciation"
        alt=""
      />
      <img
        src={americanFlagImg}
        className={language === "American" ? "active" : "not-active"}
        onClick={() => setLanguage("American")}
        title="American Pronunciation"
        alt=""
      />
    </div>
  );
};

export default LanguageSwitch;
