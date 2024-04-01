import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ImageHero from "../../assets/img/hero.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <section className="pt-5 mt-5 custom-section">
        <Container className="pt-5">
          <Row>
            <Col md={6} className="my-auto">
              <div className="hero_one pb-4">Selamat Datang di BeranIn</div>
              <div className="hero_two pb-2">
                Bersama kita memerangi bullying!
              </div>
              <div className="hero_three">
                Apakah Anda atau seseorang yang anda kenal menjadi korban
                bullying? Di sini, anda tidak sendiri. BeranIn hadir untuk
                memberikan dukungan, bantuan, dan solusi untuk memerangi
                kekerasan dan intimidasi
              </div>
              <motion.button
                className="custom-button-hero mt-5"
                initial={{ y: 100, scale: 0.5 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                Laporkan Sekarang
              </motion.button>
            </Col>

            <Col md={6} className="home_gambar">
              <Image
                src={ImageHero}
                alt="foto_arul"
                draggable="false"
                width={"525px"}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
