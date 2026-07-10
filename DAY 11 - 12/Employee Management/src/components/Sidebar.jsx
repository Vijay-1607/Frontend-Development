import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserPlus,
  FaBuilding,
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/",
    },
    {
      name: "Employees",
      icon: <FaUsers />,
      path: "/employees",
    },
    {
      name: "Add Employee",
      icon: <FaUserPlus />,
      path: "/add-employee",
    },
    {
      name: "Departments",
      icon: <FaBuilding />,
      path: "/departments",
    },
    {
      name: "Attendance",
      icon: <FaCalendarCheck />,
      path: "/attendance",
    },
    {
      name: "Payroll",
      icon: <FaMoneyCheckAlt />,
      path: "/payroll",
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/reports",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside
      className="bg-dark text-white position-fixed vh-100 shadow"
      style={{
        width: "260px",
        left: 0,
        top: 0,
        overflowY: "auto",
        zIndex: 1050,
      }}
    >
      {/* Logo */}

      <div className="text-center py-4 border-bottom border-secondary">

        <h3 className="fw-bold text-info">
          EMS
        </h3>

        <p className="small mb-0">
          Employee Management
        </p>

      </div>

      {/* Navigation */}

      <div className="mt-4">

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `d-flex align-items-center px-4 py-3 text-decoration-none ${
                isActive
                  ? "bg-primary text-white"
                  : "text-light"
              }`
            }
          >
            <span
              className="me-3"
              style={{ fontSize: "20px" }}
            >
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>

      {/* Logout */}

      <div className="position-absolute bottom-0 start-0 w-100 p-3">

        <button className="btn btn-danger w-100">

          <FaSignOutAlt className="me-2" />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;