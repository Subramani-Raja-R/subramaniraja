import React, { useState } from "react";
import logo from "../assets/nav.svg";
import logomain from "../assets/logoblue.svg";
import bgvd from "../assets/hero_back.mp4";
import { TiArrowMaximise } from "react-icons/ti";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiScrollToBottomLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { CgMoreVertical } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import resume from "../SUBRAMANI RAJA R-RESUME-PR.pdf";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  const [navlogo, setNavlogo] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  // console.log(window.scrollY);

  const changeLogo = () => {
    if (window.scrollY >= 750 && window.scrollY <= 2700) {
      setNavlogo(true);
    } else if (window.scrollY >= 2700) {
      setNavlogo(false);
    } else {
      setNavlogo(false);
    }
  };

  window.addEventListener("scroll", changeLogo);

  return (
    <>
      <div className="container" id="top">
        <video id="back-vid" muted autoPlay loop playsInline src={bgvd}></video>
{/*         <div className="cover"></div> */}

        {/* <section id="top"> */}

        <nav data-aos="fade-down" data-aos-duration="1000">
          <img id="logo" src={navlogo ? logomain : logo} alt="S" />
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button id="nav-resume">Resume</button>
          </a>
        </nav>

        <div className="hero">
          <img src={logomain} alt="vector" />
          <div className="left" data-aos="fade-right" data-aos-duration="1000">
            <h1>Subramani Raja R</h1>
            <h4>Student | Computer Science And Engineering</h4>
            <button onClick={toggleBtn}>
              About Me {<TiArrowMaximise size={24} />}
            </button>
          </div>
          <div className="links" data-aos="fade-left" data-aos-duration="1000">
            <a href="https://www.linkedin.com/in/sraja04">
              <FaLinkedinIn className="link-btn" />
            </a>
            <a onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=sraja172004@gmail.com",
                  "gmailCompose",
                  "width=800,height=600"
                );
              }}>
              <SiGmail className="link-btn" />
            </a>
            <a href="https://github.com/Subramani-Raja-R">
              <FaGithub className="link-btn" />
            </a>
          </div>
        </div>

        <div className="view-more">
          <RiScrollToBottomLine />
          <h5>Scroll Down</h5>
        </div>
        {/* </section> */}

        {toggle && (
          <div className="about" id="about-box">
            <div className="about-left">
              <h1 data-aos="fade-down" data-aos-duration="1000">
                About Me
              </h1>
              <p data-aos="fade-right" data-aos-duration="1000">
                I am a passionate and dedicated web developer currently in my
                final year of college, aiming to secure a placement by next
                year. With a strong foundation in HTML, CSS, JavaScript, and Ui
                designing, I am actively learning other modern web technologies
                to enhance my skills. I have worked on multiple projects
                involving AI and deep learning, focusing on solving real-world
                problems through technology. Additionally, I am exploring Ar /
                Vr Technologies and continuously improving my problem-solving
                abilities. My goal is to build innovative and efficient web
                applications while staying up to date with the latest industry
                trends.
              </p>
            </div>
            <div className="about-right">
              <h1 data-aos="fade-down" data-aos-duration="1000">
                Education
              </h1>
              <div
                className="edu-con"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="edu">
                  <h3>B.E COMPUTER SCIENCE AND ENGINEERING</h3>
                  <p>Ramco Institute Of Technology</p>
                  <p>Present | 2022 - 2026</p>
                </div>
                {/* <CgMoreVertical /> */}
                <div className="edu">
                  <h3>HSC</h3>
                  <p>Raja Matric Hr Sec School</p>
                  <p>2022</p>
                </div>
                {/* <CgMoreVertical /> */}
                <div className="edu">
                  <h3>SSLC</h3>
                  <p>CEOA Matric High School</p>
                  <p>2020</p>
                </div>
              </div>
            </div>
            <ImCancelCircle id="close" onClick={toggleBtn} />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;


