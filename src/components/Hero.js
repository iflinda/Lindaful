import React from "react";
import "./Hero.css";
import "../Global.css";
import Logo from "../images/Logo.svg";

function Hero() {
  return (
    <div id="hero">
      <img
        id="logo"
        src={Logo}
        alt="Lindaful Logo with the tagline Front End Developer"
      />
    </div>
  );
}

export default Hero;
