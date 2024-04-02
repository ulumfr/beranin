import React from "react";
import Content from "../../assets/img/about.png";
import { Container } from "react-bootstrap";

const content = () => {
  return (
    <>
      <img src={Content} alt="about-img" className="w-100" />
      <div className="d-flex flex-column">
        <Container>
          <div className="text-center fw-bold mt-5">
            <h1>About Us</h1>
          </div>
          <div className="my-5">
            <h2>Bullying</h2>
            <div>
              <p style={{ textAlign: "justify" }}>
                Kasus Bullying sering terjadi di Indonesia, terutama di kalangan
                siswa SMA. Hal itu dapat menghambat proses belajar di sekolah.
                Definisi bullying oleh Olweus menyebutkan perilaku psikososial
                yang melibatkan penghinaan dan penindasan secara berulang dengan
                dampak negatif bagi pelaku dan korban, di mana pelaku memiliki
                kekuatan lebih dari korban. Cara meminimalisir angka bullying
                dapat dilakukan melalui beberapa program intervensi yang
                melibatkan berbagai pihak di sekolah.
              </p>

              <p style={{ textAlign: "justify" }}>
                Meskipun ada upaya program intervensi anti-bullying di sekolah,
                masih ada hambatan dalam mendeteksi dan melaporkan kasus
                bullying, jarak antara sekolah dan tempat tinggal yang jauh,
                serta kurangnya pemahaman tentang keberadaan masalah bullying.
                Oleh karena itu, diperlukannya upaya lebih lanjut untuk
                mengatasi hambatan tersebut dan meningkatkan efektivitas program
                anti-bullying.
              </p>
            </div>
            <div className="mt-5 pt-4">
              <h2>Objective</h2>
              <p style={{ textAlign: "justify" }}>
                Kami menyediakan platform yang memungkinkan siswa melaporkan
                kejadian bullying dengan aman, serta memberikan notifikasi
                kepada staf sekolah yang berwenang. Kami juga bertujuan untuk
                mengkoordinasikan tanggapan siswa dengan efisien dan transparan.
                Melalui kolaborasi dengan komunitas lokal, kami tidak hanya
                mendorong inovasi dalam pelestarian dan promosi budaya, tetapi
                juga mengadvokasi kesetaraan hak dan keadilan melalui kegiatan
                budaya yang inklusif. Kami percaya bahwa dengan memanfaatkan
                kekuatan budaya, kita dapat menjadi motor perubahan menuju
                kesetaraan yang lebih besar di Indonesia.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default content;
