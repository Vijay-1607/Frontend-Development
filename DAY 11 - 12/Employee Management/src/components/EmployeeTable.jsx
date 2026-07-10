import React from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function EmployeeTable({ employees }) {
  return (
    <div className="card border-0 shadow-sm">

      <div className="card-header bg-white">

        <h4 className="mb-0 fw-bold">
          Employee List
        </h4>

      </div>

      <div className="card-body">

        <div className="table-responsive">

          <table className="table table-hover align-middle">

            <thead className="table-dark">

              <tr>

                <th>Photo</th>

                <th>ID</th>

                <th>Name</th>

                <th>Department</th>

                <th>Designation</th>

                <th>Email</th>

                <th>Salary</th>

                <th>Status</th>

                <th className="text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.length > 0 ? (

                employees.map((employee) => (

                  <tr key={employee.id}>

                    <td>

                      <img
                        src={employee.image}
                        alt={employee.name}
                        width="55"
                        height="55"
                        className="rounded-circle border"
                      />

                    </td>

                    <td>

                      EMP-{employee.id}

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

                      {employee.email}

                    </td>

                    <td>

                      ₹ {employee.salary.toLocaleString()}

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

                    <td>

                      <div className="d-flex justify-content-center gap-2">

                        <Link
                          to={`/employees/${employee.id}`}
                          className="btn btn-info btn-sm"
                        >
                          <FaEye />
                        </Link>

                        <Link
                          to={`/edit-employee/${employee.id}`}
                          className="btn btn-warning btn-sm"
                        >
                          <FaEdit />
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="9"
                    className="text-center py-5"
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
  );
}

export default EmployeeTable;