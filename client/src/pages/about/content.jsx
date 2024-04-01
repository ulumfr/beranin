import React from "react";
import Content from "../../assets/img/about.png"

const content = () => {
  return (
  
    <div className="d-flex  flex-column ">
      <img src={Content} alt="" className="custom-imgabout"/>
      <div className="custom-about">
        <h1>
       About Us
        </h1>
      </div>
      <div className="c-flex">
        <div className="custom-h2">
        <h2>Bullying</h2>
        </div>
        <div className="custom-p1">
          <p>
            Kasus Bullying sering terjadi di Indonesia, terutama di kalangan siswa
        SMA. Hal itu dapat menghambat proses belajar di sekolah. Definisi
        bullying oleh Olweus menyebutkan perilaku psikososial yang melibatkan
        penghinaan dan penindasan secara berulang dengan dampak negatif bagi
        pelaku dan korban, di mana pelaku memiliki kekuatan lebih dari korban.
        Cara meminimalisir angka bullying dapat dilakukan melalui beberapa
        program intervensi yang melibatkan berbagai pihak di sekolah.
          </p>
        </div>
        <div className="custom-p2">
        <p>

         Meskipun ada upaya program intervensi anti-bullying di sekolah, masih
        ada hambatan dalam mendeteksi dan melaporkan kasus bullying, jarak
        antara sekolah dan tempat tinggal yang jauh, serta kurangnya pemahaman
        tentang keberadaan masalah bullying. Oleh karena itu, diperlukannya
        upaya lebih lanjut untuk mengatasi hambatan tersebut dan meningkatkan
        efektivitas program anti-bullying.
        </p>
        <h2>Objective</h2>
        <p>Kami menyediakan platform yang memungkinkan siswa melaporkan kejadian bullying dengan aman, serta memberikan notifikasi kepada staf sekolah yang berwenang. Kami juga bertujuan untuk mengkoordinasikan tanggapan siswa dengan efisien dan transparan. Melalui kolaborasi dengan komunitas lokal, kami tidak hanya mendorong inovasi dalam pelestarian dan promosi budaya, tetapi juga mengadvokasi kesetaraan hak dan keadilan melalui kegiatan budaya yang inklusif. Kami percaya bahwa dengan memanfaatkan kekuatan budaya, kita dapat menjadi motor perubahan menuju kesetaraan yang lebih besar di Indonesia.</p>
</div>


    </div>
      </div>
  
  );
};

export default content;
