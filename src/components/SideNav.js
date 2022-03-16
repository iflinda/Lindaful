import React from "react";
import "./SideNav.css";
import "../Global.css";
import Email from "../images/Email.svg";
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";

const SideNav = () => {
  return (
    <div>
      <ul id="sideNavigation">
        <li key="email">
          <a href="mailto: informlinda@gmail.com">
            <img src={Email} alt="Envelope to send mail."></img>
          </a>
        </li>
        <li key="linkedin">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/iflinda"
          >
            <img src={LinkedIn} alt="LinkedIn Logo." />
          </a>
        </li>
        <li key="github">
          <a target="_blank" rel="noreferrer" href="https://github.com/iflinda">
            <img id="gitHub" src={GitHub} alt="GitHub Logo." />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
