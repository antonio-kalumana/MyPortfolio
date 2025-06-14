import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.scss";
import {
  faGithubSquare,
  faGitlabSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz-icon">
            <a href="https://github.com/antonio-kalumana">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/antoniokalumana/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://gitlab.com/antonio-kalumana">
              <FontAwesomeIcon icon={faGitlabSquare} />
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Kalumana</span>
            </span>
          </div>
          <div className="profile-details-role">
            <h2>
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer', 1000,
                  'DevOps Engineer', 1000,
                  'Problem Solver', 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <span className="profile-role-tagline">
              Building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
          <a href="#contact"><button className="btn primary-btn">
              Say Hello{" "}
                <FontAwesomeIcon
                icon={faPaperPlane}
                className="send-btn"
              ></FontAwesomeIcon> 
            </button></a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
