import React, { useMemo, useState } from "react";
import { FaList, FaThLarge } from "react-icons/fa";

import employeesData from "../data/employees";
import SearchBar from "../components/SearchBar";
import DepartmentFilter from "../components/DepartmentFilter";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeCard from "../components/EmployeeCard";
import ConfirmModal from "../components/ConfirmModal";

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [view, setView] = useState("table");

  const departments = useMemo(
    () => [...new Set(employeesData.map((emp) => emp.department))],
    []
  );

  const filteredEmployees = employeesData.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.designation
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "" ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  const handleDelete = () => {
    alert("Delete functionality will be connected later.");
  };

  return (
    <div className="container-fluid">

      {/* Page Title */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            Employees
          </h2>

          <p className="text-muted">
            Manage all employees from one place.
          </p>

        </div>

        {/* View Toggle */}

        <div>

          <button
            className={`btn me-2 ${
              view === "table"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setView("table")}
          >
            <FaList />
          </button>

          <button
            className={`btn ${
              view === "grid"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setView("grid")}
          >
            <FaThLarge />
          </button>

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

      {/* Total Employees */}

      <div className="alert alert-info">

        <strong>
          Total Employees :
        </strong>{" "}
        {filteredEmployees.length}

      </div>

      {/* Table View */}

      {view === "table" ? (
        <EmployeeTable employees={filteredEmployees} />
      ) : (
        <div className="row">

          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
              />
            ))
          ) : (
            <div className="text-center py-5">

              <h4>No Employees Found</h4>

            </div>
          )}

        </div>
      )}

      {/* Delete Confirmation */}

      <ConfirmModal
        onConfirm={handleDelete}
      />

    </div>
  );
}

export default Employees;