import React from "react";
import "../css/team.css";
import akash from "../assets/akash-photograph.jpeg";
import harsh from "../assets/harsh-photograph.jpg";
import sneha from "../assets/sneha-photograph.jpg";
import abhishek from "../assets/abhishek-photograph.jpg";
import anhushree from "../assets/anhushree-photograph.jpg";
import alena from "../assets/alena-photograph.jpg";
import kamal from "../assets/kamal-photograph.jpg";
import supriya from "../assets/supriya-photograph.jpg";
import mugunthan from "../assets/mugunthan-photograph.jpg";
import dikshita from "../assets/dikshita-photograph.jpg";
import avinash from "../assets/avinash-photograph.JPG";
import soundharya from "../assets/soundharya-photograph.jpeg";
import saitejaswi from "../assets/saitejaswi-photograph.jpg";
import sharon from "../assets/sharon-photograph.jpg";
import github from "../assets/GitHub.svg";
import linkedin from "../assets/LinkedIn.svg";

const Team = () => {
  return (
    <section className="hero has-text-centered">
      <h1 className="subtitle is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
        <span
          style={{
            color: "#4285F4",
          }}
        >
          Meet{" "}
        </span>
        <span
          style={{
            color: "#DB4437",
          }}
        >
          the{" "}
        </span>
        <span
          style={{
            color: "#F4B400",
          }}
        >
          GDSC{" "}
        </span>
        <span
          style={{
            color: "#0F9D58",
          }}
        >
          Season-4{" "}
        </span>
        <span
          style={{
            color: "#4285F4",
          }}
        >
          Team{" "}
        </span>
      </h1>
      <div className="team" id="team">
        <div className="container">
          <div className="row" id="fds">
            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={akash} />
                </div>
                <div className="name">Akash M</div>
                <div className="info">
                  GDSC Lead 2020-21 • TSE 1 @Twilio • GSoC'20 @ OWASP
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/AkashM398"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/akashm398/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={harsh} />
                </div>
                <div className="name">Harsh Bardhan Mishra</div>
                <div className="info">
                  Technical Lead 2020-21 • GSoC'21 @ MetaCall
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/harshcasper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/harshcasper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={sneha} />
                </div>
                <div className="name">Sneha Gupta</div>
                <div className="info">
                  Girls@Tech Lead 2020-21 • Machine Learning @ OpenGenus
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/snehagupta-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/sneha-gupta-a157b4188/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={abhishek} />
                </div>
                <div className="name">Abhishek Singh</div>
                <div className="info">
                  Management Lead 2020-21 • Software Engineer @ LetsUpgrade
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/AbhiSinghDeveloper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/abhisinghdeveloper/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={anhushree} />
                </div>
                <div className="name">Anhushree M</div>
                <div className="info">
                  Design Lead 2020-21 • UI/UX Designer @ Economize
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/anhushree"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/anhushree/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={alena} />
                </div>
                <div className="name">Alena Thomas</div>
                <div className="info">
                  Content Outreach Lead 2020-21 • Head of Media @ ELC - SIST
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/alenatjk99/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/alenatjk99/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={kamal} />
                </div>
                <div className="name">Kamal Sharma</div>
                <div className="info">Technical Moderator • RHCSA</div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/kamaldgrt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/kamaldgrt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={supriya} />
                </div>
                <div className="name">Supriya Sinha</div>
                <div className="info">Girls@Tech Moderator</div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/supriyasinhaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/supriyasinhaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={mugunthan} />
                </div>
                <div className="name">Mugunthan Raju</div>
                <div className="info">Technical Moderator</div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/mugunthanraju/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/mugunthanraju/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={dikshita} />
                </div>
                <div className="name">Dikshita Basu</div>
                <div className="info">
                  Girls@Tech Moderator • President @ CS Club
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/hiyabose/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/dikshita-basu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={avinash} />
                </div>
                <div className="name">Avinash Mahanthi</div>
                <div className="info">Technical Moderator</div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/AvinashMahanthi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://linkedin.com/in/avinashmahanthi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={saitejaswi} />
                </div>
                <div className="name">Chakravaram Saitejaswi</div>
                <div className="info">
                  Girls@Tech Moderator • Event Leader @ Codechef SIST
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/05saitejaswi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/saitejaswi05/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={sharon} />
                </div>
                <div className="name">Sharon Mathew</div>
                <div className="info">Content Outreach Moderator</div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/sharonannmathew/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="member">
                <div className="photo">
                  <img src={soundharya} />
                </div>
                <div className="name">Soundharya Srinivasan</div>
                <div className="info">
                  Girls@Tech Moderator • Campus Ambassador @ TCS
                </div>
                <ul
                  className="social"
                  style={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <li className="item">
                    <a
                      href="https://github.com/SoundharyaDGRT/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} />
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/soundharya-srinivasan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
