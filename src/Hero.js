import React from 'react';
import './Hero.css';
import './Global.css';
import Logo from './images/Logo.svg'
import LogoBackground from './images/LogoBackground.svg'

function Hero() {
  return (
    <div id="hero">
      <img id="logo" src={Logo} alt="Lindaful Logo with the tagline that mentions that Linda is a Full Stack Developer that creates beautiful and accessible digital experiences." />
      <img id="logoBackground" src={LogoBackground} alt="" />
    </div>
  );
}

export default Hero;