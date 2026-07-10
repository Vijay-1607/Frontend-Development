import React, { useMemo, useState } from "react";
import {
  FaUserCheck,
  FaUserTimes,
  FaUserClock,
} from "react-icons/fa";

import employees from "../data/employees";
import SearchBar from "../components/SearchBar";
import DepartmentFilter from "../components/DepartmentFilter";

function Attendance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments = useMemo(
    () => [...new Set(employees.map((emp) => emp.department))],
    []
  );

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "" ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  const presentCount = filteredEmployees.filter(
    (emp) => emp.attendance === "Present"
  ).length;

  const absentCount = filteredEmployees.filter(
    (emp) => emp.attendance === "Absent"
  ).length;

  const leaveCount = filteredEmployees.filter(
    (emp) => emp.attendance === "Leave"
  ).length;

  const attendancePercentage =
    filteredEmployees.length > 0
      ? Math.round(
          (presentCount / filteredEmployees.length) * 100
        )
      : 0;

  return (
    <div className="container-fluid">

      {/* Page Header */}

      <div className="mb-4">

        <h2 className="fw-bold">
          Attendance
        </h2>

        <p className="text-muted">
          Daily employee attendance overview.
        </p>

      </div>

      {/* Summary Cards */}

      <div className="row mb-4">

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card border-0 shadow bg-success text-white">

            <div className="card-body">

              <FaUserCheck size={35} />

              <h3 className="mt-3">
                {presentCount}
              </h3>

              <p className="mb-0">
                Present
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card border-0 shadow bg-danger text-white">

            <div className="card-body">

              <FaUserTimes size={35} />

              <h3 className="mt-3">
                {absentCount}
              </h3>

              <p className="mb-0">
                Absent
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card border-0 shadow bg-warning text-dark">

            <div className="card-body">

              <FaUserClock size={35} />

              <h3 className="mt-3">
                {leaveCount}
              </h3>

              <p className="mb-0">
                On Leave
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card border-0 shadow bg-primary text-white">

            <div className="card-body">

              <h2>
                {attendancePercentage}%
              </h2>

              <p className="mb-0">
                Attendance Rate
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Search */}

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search Employee..."
      />

      {/* Department Filter */}

      <DepartmentFilter
        departments={departments}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* Attendance Table */}

      <div className="card border-0 shadow">

        <div className="card-header bg-primary text-white">

          <h4 className="mb-0">
            Employee Attendance
          </h4>

        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-light">

                <tr>

                  <th>Photo</th>

                  <th>ID</th>

                  <th>Name</th>

                  <th>Department</th>

                  <th>Designation</th>

                  <th>Attendance</th>

                </tr>

              </thead>

              <tbody>

                {filteredEmployees.length > 0 ? (

                  filteredEmployees.map((employee) => (

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
                        EMP-{employee.id}
                      </td>

                      <td>
                        {employee.name}
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
                            employee.attendance === "Present"
                              ? "bg-success"
                              : employee.attendance === "Absent"
                              ? "bg-danger"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {employee.attendance}
                        </span>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center py-4"
                    >
                      No Employees Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;