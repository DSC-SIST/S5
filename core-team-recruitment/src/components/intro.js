import React from "react";
import banner from "../assets/dsc-sist-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <section className="hero is-white has-text-centered is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <img
                className="avatar is-vcentered"
                src={banner}
                width={256}
                alt="DSC Badge"
              />
              <br></br>
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                We are Recruiting!
              </h1>
              <div className="container">
                <h2 className="subtitle">
                  <FontAwesomeIcon icon="chevron-left" /> We{" "}
                  <FontAwesomeIcon icon="chevron-right" /> are looking{" "}
                  <FontAwesomeIcon icon="desktop" /> for a new Core Team for Season 5!
                </h2>
              </div>
              <br></br>
              <a
                href="https://forms.gle/ijEEz6qtfR8C2McFA/" // To be filled
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="mdc-button mdc-button--outlined"
                  color="blue"
                >
                  <span className="mdc-button__label">Apply!</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot" />
    </section>
  );
};

export default Intro;
