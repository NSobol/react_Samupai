import React from "react";
import logo from "./../../images/logo.png";
import styles from "./Logo.module.css";

function LogoImage() {
  return (
    <>
		  <img src={logo} alt="Логотип" className={ styles.logo } />
    </>
  );
}

export default LogoImage;
