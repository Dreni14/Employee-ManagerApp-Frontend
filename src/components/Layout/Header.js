import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo / Brand */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 text-white fw-bold"
          to="/"
          style={{ fontSize: "1.2rem" }}
        >
          <FaUsers />
          Employee Manager
        </Link>
      </div>
    </nav>
  );
}

export default Header;
