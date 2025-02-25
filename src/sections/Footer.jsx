import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <section className="footer">
      <a href="#top">
        <img src="/logoblue.svg" alt="logo" />
      </a>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/sraja04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="link-btn" />
        </a>

        <a href="https://sraja172004@gmail.com ">
          <SiGmail className="link-btn" />
        </a>
        <a href="https://github.com/Subramani-Raja-R">
          <FaGithub className="link-btn" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
