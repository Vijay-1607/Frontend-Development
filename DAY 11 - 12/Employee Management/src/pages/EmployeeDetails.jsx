import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaUserTie,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

import employees from "../data/employees";

function EmployeeDetails() {
  const { id } = useParams();

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return (
      <div className="container mt-5 text-center">

        <h2 className="text-danger">
          Employee Not Found
        </h2>

        <Link
          to="/employees"
          className="btn btn-primary mt-3"
        >
          Back to Employees
        </Link>

      </div>
    );
  }

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold">
          Employee Profile
        </h2>

        <Link
          to="/employees"
          className="btn btn-secondary"
        >
          <FaArrowLeft className="me-2" />
          Back
        </Link>

      </div>

      <div className="row">

        {/* Left Card */}

        <div className="col-lg-4 mb-4">

          <div className="card border-0 shadow-lg">

            <div
              className="text-center text-white p-4"
              style={{
                background:
                  "linear-gradient(135deg,#0d6efd,#6610f2)",
              }}
            >

              <img
                src={employee.image}
                alt={employee.name}
                className="rounded-circle border border-4 border-white shadow"
                width="160"
                height="160"
              />

              <h3 className="mt-3">
                {employee.name}
              </h3>

              <p className="mb-2">
                {employee.designation}
              </p>

              <span
                className={`badge ${
                  employee.status === "Active"
                    ? "bg-success"
                    : "bg-danger"
                }`}
              >
                {employee.status}
              </span>

            </div>

            <div className="card-body">

              <Link
                to={`/edit-employee/${employee.id}`}
                className="btn btn-warning w-100"
              >
                <FaEdit className="me-2" />
                Edit Employee
              </Link>

            </div>

          </div>

        </div>

        {/* Right Card */}

        <div className="col-lg-8">

          <div className="card border-0 shadow-lg">

            <div className="card-header bg-primary text-white">

              <h4 className="mb-0">
                Employee Information
              </h4>

            </div>

            <div className="card-body">

              <div className="row">

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Employee ID
                  </h6>

                  <p>
                    EMP-{employee.id}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Full Name
                  </h6>

                  <p>
                    <FaUser className="me-2 text-primary" />
                    {employee.name}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Department
                  </h6>

                  <p>
                    <FaBuilding className="me-2 text-success" />
                    {employee.department}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Designation
                  </h6>

                  <p>
                    <FaUserTie className="me-2 text-warning" />
                    {employee.designation}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Email
                  </h6>

                  <p>
                    <FaEnvelope className="me-2 text-danger" />
                    {employee.email}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Phone
                  </h6>

                  <p>
                    <FaPhone className="me-2 text-info" />
                    {employee.phone}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Salary
                  </h6>

                  <p>
                    <FaMoneyBillWave className="me-2 text-success" />
                    ₹ {employee.salary.toLocaleString()}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Experience
                  </h6>

                  <p>
                    {employee.experience}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Joining Date
                  </h6>

                  <p>
                    <FaCalendarAlt className="me-2 text-primary" />
                    {employee.joiningDate}
                  </p>
                </div>

                <div className="col-md-6 mb-4">
                  <h6 className="text-muted">
                    Attendance
                  </h6>

                  <p>
                    {employee.attendance}
                  </p>
                </div>

                <div className="col-12">
                  <h6 className="text-muted">
                    Address
                  </h6>

                  <p>
                    <FaMapMarkerAlt className="me-2 text-danger" />
                    {employee.address}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeDetails;