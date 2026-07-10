import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBuilding,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaUserPlus,
  FaArrowRight,
} from "react-icons/fa";

import StatisticsCard from "../components/StatisticsCard";
import employees from "../data/employees";

function Dashboard() {
  const totalEmployees = employees.length;

  const totalDepartments = [
    ...new Set(employees.map((employee) => employee.department)),
  ].length;

  const presentEmployees = employees.filter(
    (employee) => employee.attendance === "Present"
  ).length;

  const totalPayroll = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  const recentEmployees = employees.slice(0, 5);

  return (
    <div className="container-fluid">

      {/* Page Heading */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            Dashboard
          </h2>

          <p className="text-muted mb-0">
            Welcome to Employee Management System
          </p>

        </div>

        <Link
          to="/add-employee"
          className="btn btn-primary"
        >
          <FaUserPlus className="me-2" />
          Add Employee
        </Link>

      </div>

      {/* Statistics */}

      <div className="row">

        <StatisticsCard
          title="Total Employees"
          value={totalEmployees}
          icon={<FaUsers />}
          bgColor="primary"
        />

        <StatisticsCard
          title="Departments"
          value={totalDepartments}
          icon={<FaBuilding />}
          bgColor="success"
        />

        <StatisticsCard
          title="Present Today"
          value={presentEmployees}
          icon={<FaCalendarCheck />}
          bgColor="warning"
        />

        <StatisticsCard
          title="Monthly Payroll"
          value={`₹${totalPayroll.toLocaleString()}`}
          icon={<FaMoneyBillWave />}
          bgColor="danger"
        />

      </div>

      {/* Recent Employees */}

      <div className="card border-0 shadow-sm mt-4">

        <div className="card-header bg-white">

          <div className="d-flex justify-content-between align-items-center">

            <h4 className="mb-0">
              Recent Employees
            </h4>

            <Link
              to="/employees"
              className="btn btn-outline-primary btn-sm"
            >
              View All
              <FaArrowRight className="ms-2" />
            </Link>

          </div>

        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-light">

                <tr>

                  <th>Photo</th>

                  <th>Name</th>

                  <th>Department</th>

                  <th>Designation</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {recentEmployees.map((employee) => (

                  <tr key={employee.id}>

                    <td>

                      <img
                        src={employee.image}
                        alt={employee.name}
                        width="55"
                        height="55"
                        className="rounded-circle"
                      />

                    </td>

                    <td>

                      <strong>
                        {employee.name}
                      </strong>

                    </td>

                    <td>
                      {employee.department}
                    </td>

                    <td>
                      {employee.designation}
                    </td>

                    <td>

                      <span
                        className={`badge ${
                          employee.status === "Active"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {employee.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="row mt-4">

        <div className="col-lg-4 mb-3">

          <Link
            to="/employees"
            className="btn btn-outline-primary w-100 py-3"
          >
            Manage Employees
          </Link>

        </div>

        <div className="col-lg-4 mb-3">

          <Link
            to="/attendance"
            className="btn btn-outline-success w-100 py-3"
          >
            Attendance
          </Link>

        </div>

        <div className="col-lg-4 mb-3">

          <Link
            to="/payroll"
            className="btn btn-outline-danger w-100 py-3"
          >
            Payroll
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;