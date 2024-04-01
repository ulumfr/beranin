import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CardNews from "./cardNews/card";
import Bully1 from "../../assets/img/bully1.png";
import Bully2 from "../../assets/img/bully2.png";
import Bully3 from "../../assets/img/bully3.png";
import Bully4 from "../../assets/img/bully4.png";
import { motion } from "framer-motion";

const NewsSection = () => {
  return (
    <div>
      <section
        className="pt-5 mt-5 custom-section"
        style={{ color: "var(--secondary-color)" }}
      >
        <Container>
          <div className="pt-5 d-flex flex-column">
            <span className="fs-4 fw-medium">News</span>
            <span className="fs-3 fw-bold">
              Menyajikan berita terbaru dan artikel
            </span>

            <Row className="pt-5">
              <Col md={6}>
                <div>
                  <CardNews
                    foto={Bully1}
                    cat={"Latest News"}
                    title={"Kasus bullying di sekolah semakin marak"}
                    desc={
                      "Perundungan tersebut terjadi antar sesama siswa SMP, di mana dalam video yang beredar di media"
                    }
                  />
                  <CardNews
                    foto={Bully2}
                    cat={"Latest News"}
                    title={"Banyak Kasus Bullying Menimpa Pelajar..."}
                    desc={
                      "Suara Indonesia, Sidoarjo - Aksi bullying atau perundungan masih tetap menjadi sorotan utama bagi masyarakat secara umum."
                    }
                  />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <CardNews
                    foto={Bully3}
                    cat={"Trending News"}
                    title={"3 Siswi Pelaku Perundungan di Alun-alun..."}
                    desc={
                      "Semarang - Tiga siswi SMP yang diperiksa karena viral melakukan perundungan"
                    }
                  />
                  <CardNews
                    foto={Bully4}
                    cat={"Latest News"}
                    title={"Psikolog Sebut Sumber Masalah Pelaku Bully.."}
                    desc={
                      "Surabaya - Kasus bullying yang semakin marak terjadi tidak hanya dilakukan oleh remaja, melainkan juga oleh anak-anak"
                    }
                  />
                </div>
              </Col>
            </Row>

            <div className="d-flex justify-content-center align-items-center">
              <motion.button
                initial={{ y: 100, scale: 0.5 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.2 }}
                className="custom-button-news my-5 fw-bold"
              >
                <Link
                  to="/news"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View All News
                </Link>
              </motion.button>
            </div>
          </div>
        </Container>
      </section>
      <div
        className="mb-5"
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "var(--tertiary-color)",
        }}
      />
    </div>
  );
};

export default NewsSection;
