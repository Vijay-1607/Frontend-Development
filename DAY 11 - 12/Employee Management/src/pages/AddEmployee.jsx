import React, { useState } from "react";
import { FaSave, FaUndo } from "react-icons/fa";

function AddEmployee() {
  const initialForm = {
    name: "",
    gender: "",
    age: "",
    department: "",
    designation: "",
    email: "",
    phone: "",
    salary: "",
    joiningDate: "",
    experience: "",
    address: "",
    image: "",
    status: "Active",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Employee Added Successfully!");

    setFormData(initialForm);
  };

  const handleReset = () => {
    setFormData(initialForm);
  };

  return (
    <div className="container-fluid">

      <div className="card border-0 shadow-lg">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            Add New Employee
          </h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>

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
                <label className="form-label">Gender</label>

                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Age</label>

                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>

                <select
                  className="form-select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
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
                <label className="form-label">Designation</label>

                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>

                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Salary (₹)</label>

                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Joining Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Experience</label>

                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  placeholder="Example: 5 Years"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Profile Image URL</label>

                <input
                  type="url"
                  className="form-control"
                  name="image"
                  placeholder="https://example.com/photo.jpg"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Address</label>

                <textarea
                  className="form-control"
                  rows="4"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label">Status</label>

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
                Save Employee
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                <FaUndo className="me-2" />
                Reset
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddEmployee;