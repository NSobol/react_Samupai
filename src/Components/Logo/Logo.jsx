import React from "react";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";
import styles from "./Logo.module.css";

function Logo() {
  return (
	  <div className={ styles.logo }>
      <LogoImage />
      <LogoText />
    </div>
  );
}

export default Logo;
