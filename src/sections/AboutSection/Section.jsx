import * as React from "react";
import aboutMe from "../../assets/aboutMe.svg";
import "./AboutSection.scss";

const About = () => {
  return (
    <section id="about">
      <div className="about-text-block">
        <span className="accent mono">Hi, my name is</span>
        <h2 className="about-header">
          <span>Kyler Renneker.</span>
          <p>A product-focused software engineer based in South Florida.</p>
        </h2>
        <p className="header-summary">
          Software Engineer with 3+ years of professional experience building
          production-ready features for both frontend and backend applications.
          I have enjoyed and thrived in various environments, working alongside
          project managers, UI/UX designers, DevOps engineers & business users
          in an effort to provide technical insight and solve challenging
          problems.
        </p>
      </div>
      <img className="about-image" src={aboutMe} alt="Programmer on computer" />
    </section>
  );
};

export default About;
