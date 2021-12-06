import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"; 
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

ReactDOM.render(
  <Router>
    <Nav />
    <SideNav />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Router>,
  document.getElementById('root')
);