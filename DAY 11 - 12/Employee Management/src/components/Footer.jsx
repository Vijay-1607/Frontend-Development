import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-top mt-5 py-4 shadow-sm">

      <div className="container-fluid">

        <div className="row align-items-center">

          {/* Company Information */}

          <div className="col-md-4 mb-3 mb-md-0">

            <h5 className="fw-bold text-primary">
              Employee Management System
            </h5>

            <p className="text-muted mb-0">
              Manage employees, attendance,
              payroll and reports efficiently.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-md-4 mb-3 mb-md-0">

            <h6 className="fw-bold mb-3">
              Quick Links
            </h6>

            <ul className="list-unstyled">

              <li>
                <a
                  href="/"
                  className="text-decoration-none text-secondary"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="/employees"
                  className="text-decoration-none text-secondary"
                >
                  Employees
                </a>
              </li>

              <li>
                <a
                  href="/attendance"
                  className="text-decoration-none text-secondary"
                >
                  Attendance
                </a>
              </li>

              <li>
                <a
                  href="/reports"
                  className="text-decoration-none text-secondary"
                >
                  Reports
                </a>
              </li>

            </ul>

          </div>

          {/* Social Media */}

          <div className="col-md-4 text-md-end">

            <h6 className="fw-bold mb-3">
              Follow Us
            </h6>

            <div>

              <a
                href="#"
                className="btn btn-outline-primary me-2"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="btn btn-outline-info me-2"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="btn btn-outline-primary me-2"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="btn btn-outline-dark"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center text-muted">

          © {currentYear} Employee Management System.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;