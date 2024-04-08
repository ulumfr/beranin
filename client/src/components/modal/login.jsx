import React, { useState } from "react";
import RegisterComponents from "./register";
import { useNavigate } from "react-router-dom";

const LoginComponents = ({ closeModal }) => {
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const openLogin = () => {
    setShowRegister(false);
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/menu-siswa");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 position-fixed vw-100 bg-opacity-50 bg-black modal-backdrop ">
        <div
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--secondary-color)",
            width: "470px",
            height: "600px",
            padding: "50px",
          }}
          className="pt-3 rounded-5 d-flex flex-column"
        >
          <div className="d-flex justify-content-end mb-3">
            <i
              onClick={closeModal}
              className="bx bx-x fs-1"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="text-center mt-2">
              <h1
                className="fw-bold"
                style={{ color: "var(--secondary-color)" }}
              >
                Login
              </h1>
            </div>
            <div className="d-flex flex-column mt-4">
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  // id="email"
                  placeholder="Enter Email"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "10px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                  autoComplete="username"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  // id="password"
                  placeholder="Enter Password"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "10px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="form-check-input"
                />
                <label htmlFor="remember" className="form-check-label mx-2">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column gap-2">
              <button className="mt-2 w-100 p-2 fw-bold border-0 custom-button-auth">
                Login
              </button>
              <div className="mt-2" style={{ fontSize: "14px" }}>
                Don’t Have Account?
                <span
                  className="fw-bold mx-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleRegister}
                >
                  Register Here!
                </span>
              </div>
              <div style={{ fontSize: "14px" }}>OR</div>
              <div>
                <i
                  className="bx bxl-google fs-1"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>
          </form>
        </div>
      </div>

      {showRegister && (
        <RegisterComponents closeModal={closeRegister} openLogin={openLogin} />
      )}
    </>
  );
};

export default LoginComponents;
