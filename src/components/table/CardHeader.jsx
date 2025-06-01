import React from "react";
import { Link } from "react-router-dom";

const CardHeader = ({ title, refresh, remove, expanded }) => {
  return (
    <div className="card-header d-flex justify-content-between align-items-center">
      <h5 className="card-title mb-0">{title}</h5>
      <div className="card-header-action d-flex align-items-center gap-2">
        <div className="card-header-btn d-flex gap-2">
          <div data-toggle="tooltip" title="Delete" onClick={remove}>
            <span className="avatar-text avatar-xs bg-danger text-white rounded-circle d-flex justify-content-center align-items-center">
              <i className="fas fa-trash-alt"></i>
            </span>
          </div>
          <div data-toggle="tooltip" title="Refresh" onClick={refresh}>
            <span className="avatar-text avatar-xs bg-warning text-white rounded-circle d-flex justify-content-center align-items-center">
              <i className="fas fa-sync-alt"></i>
            </span>
          </div>
          <div
            data-toggle="tooltip"
            title="Maximize/Minimize"
            onClick={expanded}
          >
            <span className="avatar-text avatar-xs bg-success text-white rounded-circle d-flex justify-content-center align-items-center">
              <i className="fas fa-expand-arrows-alt"></i>
            </span>
          </div>
        </div>
        <div className="dropdown">
          <div
            className="avatar-text avatar-sm rounded-circle d-flex justify-content-center align-items-center"
            data-toggle="dropdown"
            data-offset="25, 25"
          >
            <i className="fas fa-ellipsis-v" title="Options"></i>
          </div>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="#" className="dropdown-item">
              <i className="fas fa-at mr-2"></i> New
            </Link>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-calendar-alt mr-2"></i> Event
            </Link>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-bell mr-2"></i> Snoozed
            </Link>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-trash mr-2"></i> Deleted
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-cog mr-2"></i> Settings
            </Link>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-life-ring mr-2"></i> Tips & Tricks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
