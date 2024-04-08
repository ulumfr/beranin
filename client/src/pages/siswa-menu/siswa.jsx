import react, { useEffect } from "react";

const SiswaPage = () => {
  useEffect(() => {
    document.title = "BeranIn | Akun Siswa";
  });
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      Masuk Ke Siswa
    </div>
  );
};

export default SiswaPage;
