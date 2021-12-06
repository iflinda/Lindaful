import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"; 
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

ReactDOM.render(
  <Router>
    <Nav />
    <SideNav />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Router>,
  document.getElementById('root')
);