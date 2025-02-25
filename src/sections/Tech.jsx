import React from "react";
import Skills from "../skills.js";
import bgvd from "../assets/hero_back.mp4";

const Tech = () => {
  return (
    <section className="tech-section">
      {/* <video id="back-vid2" muted autoPlay loop playsInline src={bgvd}></video>
      <div className="cover"></div> */}
      <div
        className="tech-headers"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1>Skills</h1>
        <h4>These are the tech stacks that I have worked on</h4>
      </div>
      <div
        className="stacks-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {Skills.map((tech) => {
          return (
            <div className="stack-card" key={tech.id}>
              <h2>{tech.title}</h2>
              <div className="stacks">
                {tech.skills.map((skill) => {
                  return (
                    <div className="stack" key={skill.id}>
                      <img id="stack-img" src={skill.image} alt={skill.name} />
                      <p>{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
