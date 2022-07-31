import React from "react";
import "./Logo.module.css";
import "./../../images/logo.png";

function LogoImage() {
  return (
    <>
      <img
        src="./../../images/logo.png"
        alt="Логотип"
        className="app-logo-image"
      />
    </>
  );
}

export default LogoImage;
