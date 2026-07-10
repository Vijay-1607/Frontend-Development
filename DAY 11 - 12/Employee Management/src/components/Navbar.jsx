import React from "react";
import {
  FaBell,
  FaCog,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

      <div className="container-fluid">

        {/* Website Title */}

        <h4 className="fw-bold text-primary mb-0">
          Employee Management System
        </h4>

        {/* Right Side */}

        <div className="d-flex align-items-center ms-auto">

          {/* Search Box */}

          <div className="input-group me-4" style={{ width: "300px" }}>

            <span className="input-group-text bg-white">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search employees..."
            />

          </div>

          {/* Notification */}

          <button
            className="btn btn-light position-relative me-2"
            title="Notifications"
          >
            <FaBell size={20} />

            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              5
            </span>

          </button>

          {/* Settings */}

          <button
            className="btn btn-light me-3"
            title="Settings"
          >
            <FaCog size={20} />
          </button>

          {/* Profile */}

          <div className="dropdown">

            <button
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <FaUserCircle
                size={26}
                className="me-2"
              />

              Admin
            </button>

            <ul className="dropdown-menu dropdown-menu-end">

              <li>
                <a
                  href="#"
                  className="dropdown-item"
                >
                  My Profile
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="dropdown-item"
                >
                  Account Settings
                </a>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  href="#"
                  className="dropdown-item text-danger"
                >
                  Logout
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;