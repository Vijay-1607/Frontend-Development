import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaUserTie,
  FaEye,
} from "react-icons/fa";

function EmployeeCard({ employee }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 mb-4">

      <div
        className="card border-0 shadow-lg h-100"
        style={{
          borderRadius: "20px",
          transition: "0.3s ease",
          overflow: "hidden",
        }}
      >

        {/* Card Header */}

        <div
          className="text-center p-4"
          style={{
            background:
              "linear-gradient(135deg, #0d6efd, #6f42c1)",
          }}
        >

          <img
            src={employee.image}
            alt={employee.name}
            className="rounded-circle border border-4 border-white shadow"
            width="120"
            height="120"
          />

          <h4 className="text-white mt-3 mb-1">
            {employee.name}
          </h4>

          <p className="text-light mb-0">
            {employee.designation}
          </p>

        </div>

        {/* Card Body */}

        <div className="card-body">

          <div className="mb-3">

            <p className="mb-2">

              <FaBuilding
                className="text-primary me-2"
              />

              {employee.department}

            </p>

            <p className="mb-2">

              <FaEnvelope
                className="text-danger me-2"
              />

              {employee.email}

            </p>

            <p className="mb-2">

              <FaPhone
                className="text-success me-2"
              />

              {employee.phone}

            </p>

            <p className="mb-2">

              <FaUserTie
                className="text-warning me-2"
              />

              Experience : {employee.experience}

            </p>

          </div>

          <div className="d-flex justify-content-between align-items-center">

            <span
              className={`badge ${
                employee.status === "Active"
                  ? "bg-success"
                  : "bg-danger"
              }`}
            >
              {employee.status}
            </span>

            <h5 className="text-primary mb-0">
              ₹ {employee.salary.toLocaleString()}
            </h5>

          </div>

        </div>

        {/* Card Footer */}

        <div className="card-footer bg-white border-0">

          <Link
            to={`/employees/${employee.id}`}
            className="btn btn-primary w-100"
          >
            <FaEye className="me-2" />
            View Profile
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EmployeeCard;