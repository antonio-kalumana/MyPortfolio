import React from "react";
import "./About.scss";
import CV from "../../Assets/home/CV.pdf";
import Info from "./Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title"> About Me </h2>
      <div className="about-container container grid">
        <img src="" alt="" className="about-img" />
        <div className="about-data">
          <Info />

          <p className="about-description">
            Hello!👋 I'm Kalumana, a young professional with Cloud Engineer and
            software development experience in the Tech Industry.
          </p>
          <p className="about-description">
            👨🏾‍💻As a professional
            I've had experience at some organizations, all where
            I've been tied to Cloud providers, agile methodologies, and project
            management. I'm passionate about working with teams to put forth the
            best product possible, ambitious, who knows how to get things done.
          </p>
          <p className="about-description">
            Skills at backend and frontend frameworks, infrastructure as a code
            tools, cloud architecture, communication, teamwork, creative, and
            pro-active.
          </p>
          <a download={"Antonio_Kalumana"} href={CV} className="btn cv">
            <button className="btn primary-btn">
              {" "}
              Download CV <FontAwesomeIcon icon={faFileArrowDown} />{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
