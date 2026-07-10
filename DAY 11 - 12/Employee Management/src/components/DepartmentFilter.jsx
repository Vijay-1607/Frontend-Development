import React from "react";

function DepartmentFilter({
  departments,
  selectedDepartment,
  setSelectedDepartment,
}) {
  return (
    <div className="card border-0 shadow-sm mb-4">

      <div className="card-body">

        <div className="row align-items-center">

          <div className="col-md-3">

            <label className="fw-bold">
              Filter by Department
            </label>

          </div>

          <div className="col-md-9">

            <select
              className="form-select"
              value={selectedDepartment}
              onChange={(e) =>
                setSelectedDepartment(e.target.value)
              }
            >
              <option value="">
                All Departments
              </option>

              {departments.map((department, index) => (
                <option
                  key={index}
                  value={department}
                >
                  {department}
                </option>
              ))}

            </select>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DepartmentFilter;