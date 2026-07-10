import React from "react";

function StatisticsCard({
  title,
  value,
  icon,
  bgColor = "primary",
  textColor = "white",
}) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">

      <div
        className={`card border-0 shadow-sm bg-${bgColor} text-${textColor} h-100`}
        style={{
          borderRadius: "18px",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center">

            <div>

              <h6
                className="text-uppercase mb-2"
                style={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                {title}
              </h6>

              <h2 className="fw-bold">
                {value}
              </h2>

            </div>

            <div
              style={{
                fontSize: "50px",
                opacity: "0.25",
              }}
            >
              {icon}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StatisticsCard;