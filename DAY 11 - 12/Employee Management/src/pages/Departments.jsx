import React from "react";
import {
  FaBuilding,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

import employees from "../data/employees";

function Departments() {
  const departments = [...new Set(employees.map((emp) => emp.department))];

  const departmentData = departments.map((department) => {
    const departmentEmployees = employees.filter(
      (emp) => emp.department === department
    );

    const totalEmployees = departmentEmployees.length;

    const totalSalary = departmentEmployees.reduce(
      (sum, emp) => sum + emp.salary,
      0
    );

    const averageSalary =
      totalEmployees > 0
        ? Math.round(totalSalary / totalEmployees)
        : 0;

    const percentage = Math.round(
      (totalEmployees / employees.length) * 100
    );

    return {
      department,
      totalEmployees,
      totalSalary,
      averageSalary,
      percentage,
    };
  });

  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Departments
        </h2>

        <p className="text-muted">
          Department overview and statistics.
        </p>

      </div>

      <div className="row">

        {departmentData.map((dept, index) => (

          <div
            className="col-lg-4 col-md-6 mb-4"
            key={index}
          >

            <div
              className="card border-0 shadow-lg h-100"
              style={{
                borderRadius: "18px",
              }}
            >

              <div className="card-header bg-primary text-white">

                <div className="d-flex align-items-center">

                  <FaBuilding
                    size={28}
                    className="me-3"
                  />

                  <div>

                    <h5 className="mb-0">
                      {dept.department}
                    </h5>

                    <small>
                      Department
                    </small>

                  </div>

                </div>

              </div>

              <div className="card-body">

                <div className="mb-3">

                  <p className="mb-2">

                    <FaUsers className="me-2 text-primary" />

                    <strong>Employees :</strong>{" "}
                    {dept.totalEmployees}

                  </p>

                  <p className="mb-2">

                    <FaMoneyBillWave className="me-2 text-success" />

                    <strong>Total Salary :</strong>{" "}
                    ₹ {dept.totalSalary.toLocaleString()}

                  </p>

                  <p className="mb-3">

                    <strong>Average Salary :</strong>{" "}
                    ₹ {dept.averageSalary.toLocaleString()}

                  </p>

                </div>

                <label className="fw-bold mb-2">

                  Employee Distribution

                </label>

                <div className="progress mb-2">

                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: `${dept.percentage}%`,
                    }}
                  >
                    {dept.percentage}%
                  </div>

                </div>

                <small className="text-muted">

                  {dept.totalEmployees} out of{" "}
                  {employees.length} employees

                </small>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Departments;