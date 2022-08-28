import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <i className="fas fa-meteor"></i>
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Working Group</a>
          </li>
          <li>
            <a href="#">Activities</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
