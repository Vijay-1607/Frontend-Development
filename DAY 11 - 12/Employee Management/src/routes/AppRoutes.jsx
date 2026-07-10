import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import EmployeeDetails from "../pages/EmployeeDetails";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import Departments from "../pages/Departments";
import Attendance from "../pages/Attendance";
import Payroll from "../pages/Payroll";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        {/* Dashboard */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* Employees */}
        <Route
          path="employees"
          element={<Employees />}
        />

        <Route
          path="employees/:id"
          element={<EmployeeDetails />}
        />

        <Route
          path="add-employee"
          element={<AddEmployee />}
        />

        <Route
          path="edit-employee/:id"
          element={<EditEmployee />}
        />

        {/* Departments */}
        <Route
          path="departments"
          element={<Departments />}
        />

        {/* Attendance */}
        <Route
          path="attendance"
          element={<Attendance />}
        />

        {/* Payroll */}
        <Route
          path="payroll"
          element={<Payroll />}
        />

        {/* Reports */}
        <Route
          path="reports"
          element={<Reports />}
        />

        {/* Settings */}
        <Route
          path="settings"
          element={<Settings />}
        />

      </Route>

      {/* 404 Page */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;