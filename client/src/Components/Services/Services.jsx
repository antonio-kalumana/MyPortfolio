import {
  faArrowRight,
  faCheckCircle,
  faCloud,
  faCode,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Services.scss";

export default function Services() {
  const [toogleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="service-section" id="services">
      <h2 className="section-title">Services</h2>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <FontAwesomeIcon
              className="services-icon"
              icon={faCloud}
            ></FontAwesomeIcon>
            <h3 className="services-title">Cloud Engineer</h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)}>
            View more{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              color="beige"
              className="services-button-icon"
            ></FontAwesomeIcon>
          </span>

          <div
            className={
              toogleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FontAwesomeIcon
                onClick={() => toggleTab(0)}
                icon={faXmark}
                className="services-modal-content-close"
              ></FontAwesomeIcon>
              <h3 className="services-modal-title"> Cloud Engineer</h3>
              <p className="services-modal-description">
                <h2 className="services-modal-title">
                  {" "}
                  Claranet Portugal · Internship
                </h2>
                <h1 className="services-modal-title">
                  {" "}
                  Feb 2022 - Sep 2022 · 8 months
                </h1>
                During my internship I performed tasks such as:
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Create Mult-cloud architecture "AWS e AZURE"
                  </p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Implementation of infrastructure as code using Terraform
                  </p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Manage Infrastructure using Ansible.
                  </p>
                </li>
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Automation infrastructure using Jenkins
                  </p>
                </li>
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Services Visualization using Amazon CloudWatch and Azure
                    Monitor
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div>
            <FontAwesomeIcon
              icon={faCode}
              className="services-icon"
            ></FontAwesomeIcon>
            <h3 className="services-title">Software Developer</h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(2)}>
            View more{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              color="beige"
              className="services-button-icon"
            ></FontAwesomeIcon>
          </span>

          <div
            className={
              toogleState === 2
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FontAwesomeIcon
                onClick={() => toggleTab(0)}
                icon={faXmark}
                className="services-modal-content-close"
              ></FontAwesomeIcon>
              <h3 className="services-modal-title"> Software Developer</h3>
              <p className="services-modal-description">
                <h2 className="services-modal-title">
                  {" "}
                  Bizdirect - A Claranet Group Company · Freelance
                </h2>
                <h1 className="services-modal-title">
                  {" "}
                  Mar 2021 - Jul 2021 · 5 months
                </h1>
                This project was done in collaboration with my colleagues where
                we had to perform tasks such as:
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Design Web Interface and mobile interface using AdobeXD
                  </p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Work with Backend and Frontend Frameworks using node.js and
                    react.js
                  </p>
                </li>

                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Create Relational Database using PostgreSQL
                  </p>
                </li>
                <li className="services-modal-service">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="orange-black"
                    className="service-modal-icon"
                  ></FontAwesomeIcon>
                  <p className="service-modal-info">
                    Create Rest API using Express.js
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
