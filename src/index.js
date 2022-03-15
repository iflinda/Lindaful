import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

ReactDOM.render(
  <Router>
    <Nav />
    <SideNav />
    <Hero />
    <About />
    <Projects />
    <Footer />
  </Router>,
  document.getElementById("root")
);
