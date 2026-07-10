import React from "react";

function ConfirmModal({
  title = "Confirm Delete",
  message = "Are you sure you want to delete this employee?",
  onConfirm,
}) {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content border-0 shadow">

          {/* Header */}

          <div className="modal-header bg-danger text-white">

            <h5
              className="modal-title"
              id="deleteModalLabel"
            >
              {title}
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>

          </div>

          {/* Body */}

          <div className="modal-body">

            <div className="text-center py-3">

              <div
                className="display-1 text-danger mb-3"
              >
                ⚠️
              </div>

              <h4 className="mb-3">
                Delete Employee
              </h4>

              <p className="text-muted">
                {message}
              </p>

            </div>

          </div>

          {/* Footer */}

          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={onConfirm}
            >
              Delete Employee
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ConfirmModal;