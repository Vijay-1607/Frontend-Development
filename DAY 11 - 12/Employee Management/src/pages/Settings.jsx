import React, { useState } from "react";
import {
  FaUserCog,
  FaBell,
  FaLock,
  FaPalette,
  FaSave,
  FaUndo,
} from "react-icons/fa";

function Settings() {
  const [settings, setSettings] = useState({
    companyName: "ABC Technologies",
    adminName: "Administrator",
    email: "admin@company.com",
    phone: "+91 9876543210",
    theme: "Light",
    notifications: true,
    emailAlerts: true,
    twoFactor: false,
    language: "English",
    autoBackup: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    alert("Settings Saved Successfully!");
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="mb-4">

        <h2 className="fw-bold">
          Application Settings
        </h2>

        <p className="text-muted">
          Configure your Employee Management System.
        </p>

      </div>

      <form onSubmit={handleSave}>

        <div className="row">

          {/* Profile Settings */}

          <div className="col-lg-6 mb-4">

            <div className="card border-0 shadow">

              <div className="card-header bg-primary text-white">

                <FaUserCog className="me-2" />

                Profile Settings

              </div>

              <div className="card-body">

                <div className="mb-3">

                  <label className="form-label">
                    Company Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="companyName"
                    value={settings.companyName}
                    onChange={handleChange}
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Administrator Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="adminName"
                    value={settings.adminName}
                    onChange={handleChange}
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Phone
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={settings.phone}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Appearance */}

          <div className="col-lg-6 mb-4">

            <div className="card border-0 shadow">

              <div className="card-header bg-success text-white">

                <FaPalette className="me-2" />

                Appearance

              </div>

              <div className="card-body">

                <div className="mb-3">

                  <label className="form-label">
                    Theme
                  </label>

                  <select
                    className="form-select"
                    name="theme"
                    value={settings.theme}
                    onChange={handleChange}
                  >
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Blue</option>
                  </select>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Language
                  </label>

                  <select
                    className="form-select"
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                  >
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Hindi</option>
                  </select>

                </div>

              </div>

            </div>

          </div>

          {/* Notifications */}

          <div className="col-lg-6 mb-4">

            <div className="card border-0 shadow">

              <div className="card-header bg-warning">

                <FaBell className="me-2" />

                Notifications

              </div>

              <div className="card-body">

                <div className="form-check form-switch mb-3">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Enable Notifications
                  </label>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="emailAlerts"
                    checked={settings.emailAlerts}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Email Alerts
                  </label>

                </div>

              </div>

            </div>

          </div>

          {/* Security */}

          <div className="col-lg-6 mb-4">

            <div className="card border-0 shadow">

              <div className="card-header bg-danger text-white">

                <FaLock className="me-2" />

                Security

              </div>

              <div className="card-body">

                <div className="form-check form-switch mb-3">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="twoFactor"
                    checked={settings.twoFactor}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Enable Two-Factor Authentication
                  </label>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="autoBackup"
                    checked={settings.autoBackup}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Automatic Daily Backup
                  </label>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-3">

          <button
            type="submit"
            className="btn btn-success me-3"
          >
            <FaSave className="me-2" />
            Save Settings
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
  );
}

export default Settings;