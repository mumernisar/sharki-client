import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
      <li>
        <Link
          to="#"
          className="d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-arrow-left"></i>
        </Link>
      </li>
      <li>
        <Link to="#" className="active">
          1
        </Link>
      </li>
      <li>
        <Link to="#">2</Link>
      </li>
      <li>
        <Link
          to="#"
          className="d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-ellipsis-h"></i>
        </Link>
      </li>
      <li>
        <Link to="#">8</Link>
      </li>
      <li>
        <Link to="#">9</Link>
      </li>
      <li>
        <Link
          to="#"
          className="d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-arrow-right"></i>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
