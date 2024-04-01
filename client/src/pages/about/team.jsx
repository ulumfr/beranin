import React from "react";
import { Container } from "react-bootstrap";
import Dom from "../../assets/img/foto_dom.png";
import Ulum from "../../assets/img/foto_ulum.png";
import Yudha from "../../assets/img/foto_yudha.png";
import Nasrul from "../../assets/img/foto_nasrul.png";

const Team = () => {
  return (
    <div>
      <section
        className="team-1 mb-5"
        style={{ background: "var(--primary-color)" }}
      >
        <Container>
          <div className="c-flex flex-column">
            <h2 className="ourt"> Our Team</h2>
            <span className="best1">
              Our best team member that <br /> give you the best result
            </span>
          </div>
          <div className="imgteam">
            <div className="yellow-box">
              <img src={Dom} alt="Foto Dom" />
            </div>

            <img src={Ulum} alt="Foto Ulum" />
            <img src={Yudha} alt="Foto Yudha" />
            <img src={Nasrul} alt="Foto Nasrul" />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team;
