import React from "react";
import banner from "../assets/gdsc-footer.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faDesktop,
  faChevronLeft,
  faChevronRight,
  faFacebook,
  faTwitter,
  faLinkedin,
  faDribbble,
  faGithub
);

const Footer = () => {
  return (
    <footer className="section is-white is-medium has-text-centered">
      <div className="container">
        <div
          className="logo"
          style={{
            margin: "0 0 10px 0",
          }}
        >
          <img
            className="footer-logo"
            style={{
              width: "350px",
            }}
            src={banner}
            alt="GDSC Logo"
          />
        </div>
      </div>
      <div className="container">
          <h2 className="subtitle">
          Want to join us with the journey to build an awesome community? Come and join us as part of the GDSC-SIST Season-5.
          </h2>
        </div>
      <div
        style={{
          margin: "10px 0 0 0",
        }}
      >
        <div className="social-links">
          <a
            href="https://twitter.com/dsc_sist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/dsc-sist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
            </span>
          </a>
          <a
            href="https://github.com/DSC-SIST"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
