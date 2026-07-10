import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import employees from "../data/employees";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return (
      <div className="container mt-5 text-center">

        <h2 className="text-danger">
          Employee Not Found
        </h2>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/employees")}
        >
          Back to Employees
        </button>

      </div>
    );
  }

  const [formData, setFormData] = useState({
    ...employee,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Employee");

    console.log(formData);

    alert("Employee Updated Successfully!");

    navigate("/employees");
  };

  return (
    <div className="container-fluid">

      <div className="card border-0 shadow-lg">

        <div className="card-header bg-warning">

          <h3 className="mb-0">
            Edit Employee
          </h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Gender
                </label>

                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Age
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Department
                </label>

                <select
                  className="form-select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option>Information Technology</option>
                  <option>Human Resources</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Operations</option>
                  <option>Customer Support</option>
                  <option>Design</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Designation
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Salary
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Joining Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Experience
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Profile Image URL
                </label>

                <input
                  type="url"
                  className="form-control"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />

              </div>

              <div className="col-12 mb-3">

                <label className="form-label">
                  Address
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Status
                </label>

                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

              </div>

            </div>

            <div className="d-flex gap-3">

              <button
                type="submit"
                className="btn btn-success"
              >
                <FaSave className="me-2" />
                Update Employee
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/employees")}
              >
                <FaArrowLeft className="me-2" />
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditEmployee;