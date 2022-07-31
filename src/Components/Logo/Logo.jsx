import React from "react";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";
import "./Logo.module.css";

function Logo() {
  return (
    <div className="app-logo">
      <LogoImage />
      <LogoText />
    </div>
  );
}

export default Logo;
