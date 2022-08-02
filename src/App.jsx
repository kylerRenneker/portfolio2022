import * as React from "react";
import "./main.scss";
import logo from "./assets/logo.svg";
// import gitLogo from "./assets/githubIcon.svg";
import ExperienceSection from "./sections/ExperienceSection/Section";
import WorkSection from "./sections/WorkSection/Section";
import AboutSection from "./sections/AboutSection/Section";
import Contact from "./sections/ContactSection/Section";

function App() {
  return (
    <div id="app">
      <header className="portfolio-header">
        <img className="header-logo" src={logo} alt="logo" />
        <ul className="nav-list mono">
          <li>
            <a href="#about">
              <span>01.</span>About
            </a>
          </li>
          <li>
            <a href="#experience">
              <span>02.</span>Experience
            </a>
          </li>
          <li>
            <a href="#work">
              <span>03.</span>Work
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>04.</span>Contact
            </a>
          </li>
        </ul>
      </header>
      <main>
        <div className="content-container">
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <Contact />
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="https://github.com/kylerRenneker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="social-icon"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            {/* <li>
              <a href="https://www.instagram.com/kyler_renn94">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="social-icon"
                >
                  <title>Instagram</title>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li> */}
            <li>
              <a href="https://www.linkedin.com/in/kyler-rennneker/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="social-icon"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
