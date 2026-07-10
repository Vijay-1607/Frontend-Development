import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div
        className="card border-0 shadow-lg text-center p-5"
        style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        {/* Icon */}

        <div className="mb-4">

          <FaExclamationTriangle
            size={80}
            className="text-warning"
          />

        </div>

        {/* 404 */}

        <h1
          className="display-1 fw-bold text-primary"
        >
          404
        </h1>

        <h2 className="fw-bold mb-3">
          Page Not Found
        </h2>

        <p className="text-muted fs-5 mb-4">
          Sorry! The page you are looking for
          doesn't exist or has been moved.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <Link
            to="/"
            className="btn btn-primary"
          >
            <FaHome className="me-2" />
            Dashboard
          </Link>

          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-2" />
            Go Back
          </button>

        </div>

        <hr className="my-4" />

        <small className="text-muted">
          Employee Management System © 2026
        </small>

      </div>
    </div>
  );
}

export default NotFound;