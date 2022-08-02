import * as React from "react";
import { SectionHeader } from "../../components/SectionHeader";
import { projectData } from "./projectData";
import "./WorkSection.scss";

const Work = () => {
  return (
    <section id="work" className="section-pad-top">
      <div className="work-section-container">
        <SectionHeader text="Some Things I've Built" index={3} />
        <ul className="projects-list">
          {projectData &&
            projectData.map((project, index) => {
              return (
                <li
                  className={`project-list-item ${
                    index === 0 || index % 2 === 0
                      ? "flex-row"
                      : "flex-row-reverse"
                  }`}
                >
                  <div className="project-image">
                    <img
                      className={`${
                        project.imgLg ? "project-img-lg" : "project-img-sm"
                      }`}
                      // style={{ width: project.imageWidth }}
                      src={project.imageSrc}
                      alt={project.alt || "project"}
                    />
                  </div>
                  <div className="project-content">
                    <div
                      className={`project-head ${
                        index === 0 || index % 2 === 0
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      <p className="mono accent">{project.content.type}</p>
                      <h3>{project.content.title}</h3>
                    </div>

                    <div className="project-summary">
                      <p>{project.content.summary}</p>
                    </div>
                    <ul className="project-technologies">
                      {project.content.technologies.map((tech) => {
                        return <li>{tech}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Work;
