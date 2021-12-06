import React from 'react';
import './Footer.css';
import './Global.css';
import FooterBackground from './images/FooterBackground.svg'
import Copyright from './images/Copyright.svg';
import Bye from './images/Bye.svg';

function Footer() {
  return (
    <div id="footer">
        <h1 id="thanks">thank you</h1>
        <img className="bye" src={Bye} alt="Have a lindaful day message." />
        <img id="footerBackground" src={FooterBackground} alt="" />
        <img className="copyright" src={Copyright} alt="Designed & Developed with love by Linda Ngoc Nguyen. © All rights reserved message." />
    </div>
  );
}

export default Footer;