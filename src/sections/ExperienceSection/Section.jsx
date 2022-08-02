import * as React from "react";
import { experienceTabData } from "./tabData";
import "./ExperienceSection.scss";
import { SectionHeader } from "../../components/SectionHeader";

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState(experienceTabData.tabs[0]);

  const updateActiveTab = (data) => {
    setActiveTab(data);
  };

  return (
    <section id="experience" className="section-pad-top section-pad-bottom">
      <div className="section-container">
        <SectionHeader text="Where I've Worked" index={2} />
        <div className="experience-list">
          <div className="experience-tabs">
            {experienceTabData.tabs.map((tab) => {
              return (
                <button
                  className={`${
                    activeTab.title === tab.title ? "active" : ""
                  } tab-btn mono`}
                  onClick={() => updateActiveTab(tab)}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
          <div className="experience-content">
            {experienceTabData.tabs.map((tab) => {
              return (
                <div
                  className={`${
                    activeTab && activeTab.title === tab.title
                      ? "active-tab"
                      : "inactive-tab"
                  } exp-tab`}
                >
                  <h3>{tab.content.role}</h3>
                  <p>{tab.content.date}</p>
                  <div className="experience-summary">
                    <p>{tab.content.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
