import React from "react";
// import pizzaimg from "../assets/pizza-figma.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import projectElements from "../projectsTimeline.js";

const Projects = () => {
  return (
    <section className="project-section">
      <div id="project-head">
        <h1>Latest Projects</h1>
      </div>
      <VerticalTimeline
        className={"timeline"}
        animate={false}
        lineColor={"#1788ae"}
      >
        {projectElements.map((element) => {
          return (
            <VerticalTimelineElement
              className={"vertical-timeline-element"}
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                textAlign: "center",
                border: "none",
                padding: "0px",
                margin: "0px",
                boxShadow: "none",
                zIndex: "999",
              }}
              key={element.id}
              animate={true}
              lineColor={"blue"}
              date={
                <>
                  {
                    <img
                      className="project-img"
                      src={element.image}
                      alt="pizza project"
                    />
                  }
                </>
              }
              iconStyle={{
                backgroundColor: "#1788ae",
                width: "10px",
                height: "10px",
                marginLeft: "-5px",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.subtitle}
              </h4>
              <p className="vertical-timeline-element-description">
                {element.description}
              </p>

              <div
                className="tech-stack-container"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {element["tech-stack"].map((tech, index) => (
                  <span key={index} className="tech-stack">
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Projects;
