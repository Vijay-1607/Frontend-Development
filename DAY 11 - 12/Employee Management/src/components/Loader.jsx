import React from "react";

function Loader({
  text = "Loading...",
  fullScreen = false,
}) {
  return (
    <div
      className={
        fullScreen
          ? "d-flex justify-content-center align-items-center vh-100"
          : "d-flex justify-content-center align-items-center py-5"
      }
    >
      <div className="text-center">

        <div
          className="spinner-border text-primary"
          role="status"
          style={{
            width: "4rem",
            height: "4rem",
          }}
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>

        <h5 className="mt-4 text-secondary">
          {text}
        </h5>

      </div>
    </div>
  );
}

export default Loader;