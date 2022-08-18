import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h4>Experience</h4>
              <small>Freasher</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h4>Projects</h4>
              <small>3 Completed</small>
            </article>

          </div>
          <p>
            Hi, I am Shikhar Dutta.I am from Berhampore,West Bengal.I am pursuing Bachelor of Technology in Electronics and Communication Engineering.
            My major interests are Web Developement and Machine Learning.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
