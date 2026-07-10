import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="d-flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          backgroundColor: "#f4f6f9",
        }}
      >

        {/* Navbar */}

        <Navbar />

        {/* Main Page */}

        <main className="container-fluid py-4">

          <Outlet />

        </main>

        {/* Footer */}

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;