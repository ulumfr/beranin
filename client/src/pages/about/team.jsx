import React from "react";
import { Container } from "react-bootstrap";
import Dom from "../../assets/img/foto_dom.png";
import Ulum from "../../assets/img/foto_ulum.png";
import Yudha from "../../assets/img/foto_yudha.png";
import Nasrul from "../../assets/img/foto_nasrul.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  return (
    <div>
      <section className="p-5" style={{ background: "var(--primary-color)" }}>
        <Container>
          <div className="flex-column mb-5">
            <h2 className="ourt"> Our Team</h2>
            <span className="best1">
              our best team member that <br /> give you the best result
            </span>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 200,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 200,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Dom} alt="Foto-Dom" className="img-team" />
              <div className="custom-card-team d-flex align-items-center justify-content-center flex-column">
                <span
                  className="fw-bold fs-5"
                  style={{ color: "var(--text-color)" }}
                >
                  Hadomuan Sitinjak
                </span>
                <span>Hustler</span>
                <div className="my-3">
                  <a href="https://www.instagram.com/bearnin/">
                    <i className="bx bxl-instagram custom-team-logo fs-2"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/beranin/">
                    <i className="bx bxl-linkedin custom-team-logo fs-2"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Ulum} alt="Foto-Ulum" className="img-team" />
                <div className="custom-card-team d-flex align-items-center justify-content-center flex-column">
                  <span
                    className="fw-bold fs-5"
                    style={{ color: "var(--text-color)" }}
                  >
                    Bahrul Ulum Fadhlur R
                  </span>
                  <span>Hacker</span>
                  <div className="my-3">
                    <a href="https://www.instagram.com/bearnin/">
                      <i className="bx bxl-instagram custom-team-logo fs-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beranin/">
                      <i className="bx bxl-linkedin custom-team-logo fs-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Yudha} alt="Foto-Yudha" className="img-team" />
                <div className="custom-card-team d-flex align-items-center justify-content-center flex-column">
                  <span
                    className="fw-bold fs-5"
                    style={{ color: "var(--text-color)" }}
                  >
                    Yudha Aryo Wicaksono
                  </span>
                  <span>Hacker</span>
                  <div className="my-3">
                    <a href="https://www.instagram.com/bearnin/">
                      <i className="bx bxl-instagram custom-team-logo fs-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beranin/">
                      <i className="bx bxl-linkedin custom-team-logo fs-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Nasrul} alt="Foto-Nasrul" className="img-team" />
                <div className="custom-card-team d-flex align-items-center justify-content-center flex-column">
                  <span
                    className="fw-bold fs-5"
                    style={{ color: "var(--text-color)" }}
                  >
                    Nasurl Hidayat
                  </span>
                  <span>Hipster</span>
                  <div className="my-3">
                    <a href="https://www.instagram.com/bearnin/">
                      <i className="bx bxl-instagram custom-team-logo fs-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beranin/">
                      <i className="bx bxl-linkedin custom-team-logo fs-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Nasrul} alt="Foto-Daffi" className="img-team" />
                <div className="custom-card-team d-flex align-items-center justify-content-center flex-column">
                  <span
                    className="fw-bold fs-5"
                    style={{ color: "var(--text-color)" }}
                  >
                    Keysar Khadaffi
                  </span>
                  <span>Hipster</span>
                  <div className="my-3">
                    <a href="https://www.instagram.com/bearnin/">
                      <i className="bx bxl-instagram custom-team-logo fs-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beranin/">
                      <i className="bx bxl-linkedin custom-team-logo fs-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </div>
  );
};

export default Team;
