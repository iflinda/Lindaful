import React from "react";
import "./Footer.css";
import "../Global.css";
import FooterBackground from "../images/FooterBackground.svg";

function Footer() {
  return (
    <div id="footer">
      <h1 id="thanks">thank you</h1>
      <p>© 2022 Linda Ngoc Nguyen. All rights reserved.</p>
      <img id="footerBackground" src={FooterBackground} alt="" />
    </div>
  );
}

export default Footer;
