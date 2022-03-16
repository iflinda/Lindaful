import "./Nav.css";
import "../Global.css";
import React from "react";

const Nav = () => {
  return (
    <div>
      <ul id="navigation">
        <li key="hero">
          <a id="menuHero" className="menu" href="#hero">
            home
          </a>
        </li>
        <li key="about">
          <a id="menuAbout" className="menu" href="#about">
            about
          </a>
        </li>
        <li key="projects">
          <a id="menuProject" className="menu" href="#projects">
            projects
          </a>
        </li>
        <li key="contact">
          <a
            id="menuProject"
            className="menu"
            href="mailto: informlinda@gmail.com"
          >
            contact
          </a>
        </li>
        <li key="resume">
          <a id="menuResume" className="menu" href="resume.pdf" target="_blank">
            résumé
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
