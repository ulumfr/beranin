import React from "react";

const RegisterComponents = ({ closeModal, openLogin }) => {
  const handleSubmit = () => {
    closeModal();
    openLogin();
  };

  return (
    <div>
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
                Register
              </h1>
            </div>
            <div className="d-flex flex-column mt-4">
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "6px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "6px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                  autoComplete="username"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "6px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="school"
                  placeholder="Enter Your School Name"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "6px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Adddress"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "6px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter Your Number Phone"
                  className="form-control bg-transparent custom-input-form"
                  style={{
                    padding: "6px 15px",
                    color: "var(--secondary2-color)",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div>
              <button
                className="mt-4 w-100 p-2 fw-bold border-0 custom-button-auth"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponents;
