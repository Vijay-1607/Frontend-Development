import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import {
  FaChartBar,
  FaPrint,
  FaDownload,
} from "react-icons/fa";

import employees from "../data/employees";

function Reports() {

  const departmentData = [...new Set(employees.map(emp => emp.department))]
    .map(department => ({
      department,
      employees: employees.filter(
        emp => emp.department === department
      ).length
    }));

  const salaryData = employees.map(emp => ({
    name: emp.name,
    salary: emp.salary
  }));

  const attendanceData = [
    {
      month: "Jan",
      attendance: 92
    },
    {
      month: "Feb",
      attendance: 90
    },
    {
      month: "Mar",
      attendance: 95
    },
    {
      month: "Apr",
      attendance: 93
    },
    {
      month: "May",
      attendance: 96
    },
    {
      month: "Jun",
      attendance: 94
    }
  ];

  const COLORS = [
    "#0d6efd",
    "#20c997",
    "#ffc107",
    "#dc3545",
    "#6f42c1",
    "#198754",
    "#fd7e14",
    "#0dcaf0"
  ];

  return (

    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            Reports & Analytics
          </h2>

          <p className="text-muted">
            Employee statistics and business insights
          </p>

        </div>

        <div>

          <button className="btn btn-outline-primary me-2">

            <FaPrint className="me-2"/>

            Print

          </button>

          <button className="btn btn-success">

            <FaDownload className="me-2"/>

            Export

          </button>

        </div>

      </div>

      {/* Summary */}

      <div className="row mb-4">

        <div className="col-md-3">

          <div className="card shadow border-0">

            <div className="card-body text-center">

              <FaChartBar
                size={40}
                className="text-primary"
              />

              <h3 className="mt-3">
                {employees.length}
              </h3>

              <p>Total Employees</p>

            </div>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow border-0">

            <div className="card-body text-center">

              <h3 className="text-success">

                ₹ {employees
                  .reduce((sum, emp) => sum + emp.salary, 0)
                  .toLocaleString()}

              </h3>

              <p>Total Payroll</p>

            </div>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow border-0">

            <div className="card-body text-center">

              <h3 className="text-danger">

                {
                  [...new Set(
                    employees.map(emp => emp.department)
                  )].length
                }

              </h3>

              <p>Departments</p>

            </div>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow border-0">

            <div className="card-body text-center">

              <h3 className="text-warning">

                {Math.round(

                  employees.reduce(
                    (sum, emp) => sum + emp.salary,
                    0
                  ) / employees.length

                ).toLocaleString()}

              </h3>

              <p>Average Salary</p>

            </div>

          </div>

        </div>

      </div>

      {/* Charts */}

      <div className="row">

        {/* Department Pie Chart */}

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-header">

              <h5>
                Department Distribution
              </h5>

            </div>

            <div className="card-body">

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <PieChart>

                  <Pie
                    data={departmentData}
                    dataKey="employees"
                    nameKey="department"
                    outerRadius={120}
                    label
                  >

                    {
                      departmentData.map((entry,index)=>(

                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />

                      ))
                    }

                  </Pie>

                  <Tooltip/>

                  <Legend/>

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* Salary Bar Chart */}

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-header">

              <h5>
                Salary Analysis
              </h5>

            </div>

            <div className="card-body">

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <BarChart
                  data={salaryData}
                >

                  <CartesianGrid strokeDasharray="3 3"/>

                  <XAxis dataKey="name"/>

                  <YAxis/>

                  <Tooltip/>

                  <Legend/>

                  <Bar
                    dataKey="salary"
                    fill="#0d6efd"
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* Attendance Line Chart */}

        <div className="col-12">

          <div className="card shadow border-0">

            <div className="card-header">

              <h5>
                Monthly Attendance Report
              </h5>

            </div>

            <div className="card-body">

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <LineChart
                  data={attendanceData}
                >

                  <CartesianGrid strokeDasharray="3 3"/>

                  <XAxis dataKey="month"/>

                  <YAxis/>

                  <Tooltip/>

                  <Legend/>

                  <Line
                    type="monotone"
                    dataKey="attendance"
                    stroke="#198754"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Reports;