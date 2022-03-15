import React from 'react';
import './About.css';
import '../Global.css';

function About() {
  return (
    <div id="about">
      <h1>hello world!</h1>
      <p>My name is<span className="handwritten">&nbsp;Linda Ngoc Nguyen.&nbsp;</span>
      <br/> 
      I'm a
      <span className="handwritten">&nbsp;passionate&nbsp;</span> 
      and 
      <span className="handwritten">&nbsp;creative&nbsp;</span> 
      <br />
      <span className="role">full stack developer&nbsp;</span>
      <br /> 
      living in Vancouver, BC in Canada.</p>
      <a href="resume.pdf" target="_blank">résumé</a>
    </div>
  );
}

export default About;
