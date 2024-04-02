import React, { useEffect } from "react";
import CardNews from "../home/cardNews/card";
import { Container, Row, Col } from "react-bootstrap";
import Bully1 from "../../assets/img/bully1.png";
import Bully2 from "../../assets/img/bully2.png";
import Bully3 from "../../assets/img/bully3.png";
import Bully4 from "../../assets/img/bully4.png";

const NewsPage = () => {
  useEffect(() => {
    document.title = "BeranIn | News";
  });

  return (
    <>
      <div className="my-5 pt-5">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
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
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsPage;
