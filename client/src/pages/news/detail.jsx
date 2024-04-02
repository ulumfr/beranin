import React, { useEffect } from "react";
import ImgBully1 from "../../assets/img/bully1.png";
import { Container } from "react-bootstrap";

const DetailNewsPage = () => {
  useEffect(() => {
    document.title = "BeranIn | Detail News";
  });

  return (
    <div>
      <section className="pt-5 mt-5">
        <Container>
          <div className="d-flex flex-column pt-5">
            <img
              src={ImgBully1}
              alt="img-buly"
              style={{ borderRadius: "25px" }}
            />
            <div className="text-center fs-3 fw-bold pt-5">
              Kasus Bullying di Sekolah Semakin Marak
            </div>
            <div className="mb-5 py-4">
              <p style={{ textAlign: "justify" }}>
                Jakarta, 20 Maret 2024 - Kasus pembullyan di lingkungan sekolah
                kembali menjadi sorotan publik dengan meningkatnya laporan
                mengenai tindakan intimidasi dan kekerasan yang dilakukan oleh
                sejumlah siswa terhadap teman sekelas mereka. Fenomena ini
                semakin mencemaskan, menyiratkan perlunya tindakan cepat dan
                tegas dari pihak sekolah serta otoritas terkait. <br /> <br />
                Menurut data yang diperoleh dari beberapa sekolah di berbagai
                wilayah, kasus pembullyan semakin marak dalam beberapa bulan
                terakhir. Beragam bentuk kekerasan seperti penghinaan verbal,
                pemukulan, pengucilan, dan bahkan ancaman fisik dilaporkan
                terjadi di koridor-koridor sekolah.
                <br /> <br />
                Salah satu kasus yang mencuat adalah kisah seorang siswa yang
                menjadi korban pemukulan massal di halaman sekolahnya. Menurut
                saksi mata, insiden tersebut berawal dari pertengkaran sepele
                yang kemudian berkembang menjadi aksi kekerasan yang melibatkan
                sejumlah siswa.
                <br /> <br />
                Sementara itu, orangtua korban dan sejumlah pihak dari
                masyarakat mendesak agar pihak sekolah mengambil langkah-langkah
                preventif yang lebih serius untuk mencegah kasus serupa terulang
                di masa mendatang.
                <br /> <br />
                "Kami sangat prihatin dengan meningkatnya kasus pembullyan di
                sekolah. Tidak hanya merugikan korban secara fisik dan
                psikologis, tetapi juga menciptakan lingkungan belajar yang
                tidak kondusif," ujar Bapak Ahmad, salah seorang orangtua murid.
                <br /> <br />
                Berdasarkan pernyataan dari pihak sekolah, mereka menyatakan
                komitmen untuk menangani kasus-kasus pembullyan dengan serius.
                Langkah-langkah seperti peningkatan pengawasan di area sekolah,
                pelaksanaan program anti-bullying, serta kerja sama dengan
                orangtua dan psikolog anak sedang dipertimbangkan untuk
                mengatasi masalah ini.
                <br /> <br />
                Terkait dengan hal ini, Kepala Dinas Pendidikan setempat juga
                menegaskan pentingnya peran bersama untuk mengatasi kasus
                pembullyan di sekolah. "Kami mengajak seluruh pihak terkait,
                baik sekolah, orangtua, maupun masyarakat, untuk bekerja sama
                dalam menciptakan lingkungan belajar yang aman, nyaman, dan
                bebas dari tindakan kekerasan," ujarnya.
                <br /> <br />
                Dengan kasus pembullyan yang semakin marak, perhatian dan
                tindakan bersama dari berbagai pihak sangat diperlukan untuk
                menciptakan lingkungan sekolah yang aman dan ramah bagi semua
                siswa. Langkah-langkah preventif dan penanganan yang tepat
                menjadi kunci dalam menghadapi tantangan ini demi masa depan
                generasi penerus bangsa.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DetailNewsPage;
