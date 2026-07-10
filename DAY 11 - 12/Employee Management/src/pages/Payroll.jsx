import React, { useMemo, useState } from "react";
import {
  FaMoneyBillWave,
  FaWallet,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

import employees from "../data/employees";
import SearchBar from "../components/SearchBar";
import DepartmentFilter from "../components/DepartmentFilter";

function Payroll() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments = useMemo(
    () => [...new Set(employees.map((emp) => emp.department))],
    []
  );

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.designation
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "" ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  const totalPayroll = filteredEmployees.reduce(
    (sum, emp) => sum + emp.salary,
    0
  );

  const averageSalary =
    filteredEmployees.length > 0
      ? Math.round(totalPayroll / filteredEmployees.length)
      : 0;

  const highestPaid =
    filteredEmployees.length > 0
      ? filteredEmployees.reduce((prev, current) =>
          prev.salary > current.salary ? prev : current
        )
      : null;

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="mb-4">

        <h2 className="fw-bold">
          Payroll Management
        </h2>

        <p className="text-muted">
          Salary overview of all employees.
        </p>

      </div>

      {/* Summary Cards */}

      <div className="row mb-4">

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card shadow border-0 bg-success text-white">

            <div className="card-body">

              <FaWallet size={35} />

              <h4 className="mt-3">
                ₹ {totalPayroll.toLocaleString()}
              </h4>

              <p className="mb-0">
                Total Payroll
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card shadow border-0 bg-primary text-white">

            <div className="card-body">

              <FaMoneyBillWave size={35} />

              <h4 className="mt-3">
                ₹ {averageSalary.toLocaleString()}
              </h4>

              <p className="mb-0">
                Average Salary
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card shadow border-0 bg-warning text-dark">

            <div className="card-body">

              <FaUsers size={35} />

              <h4 className="mt-3">
                {filteredEmployees.length}
              </h4>

              <p className="mb-0">
                Employees
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-3">

          <div className="card shadow border-0 bg-danger text-white">

            <div className="card-body">

              <FaTrophy size={35} />

              <h5 className="mt-3">
                {highestPaid ? highestPaid.name : "-"}
              </h5>

              <small>
                Highest Paid
              </small>

            </div>

          </div>

        </div>

      </div>

      {/* Search */}

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Department Filter */}

      <DepartmentFilter
        departments={departments}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* Payroll Table */}

      <div className="card border-0 shadow">

        <div className="card-header bg-primary text-white">

          <h4 className="mb-0">
            Employee Payroll
          </h4>

        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-light">

                <tr>

                  <th>ID</th>

                  <th>Name</th>

                  <th>Department</th>

                  <th>Designation</th>

                  <th>Salary</th>

                </tr>

              </thead>

              <tbody>

                {filteredEmployees.length > 0 ? (

                  filteredEmployees.map((employee) => (

                    <tr key={employee.id}>

                      <td>EMP-{employee.id}</td>

                      <td>{employee.name}</td>

                      <td>{employee.department}</td>

                      <td>{employee.designation}</td>

                      <td className="fw-bold text-success">
                        ₹ {employee.salary.toLocaleString()}
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center py-4"
                    >
                      No Employees Found
                    </td>

                  </tr>

                )}

              </tbody>

              <tfoot>

                <tr className="table-primary">

                  <th
                    colSpan="4"
                    className="text-end"
                  >
                    Total Payroll
                  </th>

                  <th>
                    ₹ {totalPayroll.toLocaleString()}
                  </th>

                </tr>

              </tfoot>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payroll;