import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>
          <span className="text1">Buildup</span>
          <span className="text2">Career</span>
        </h1>
      </div>
      <div>
        <nav>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/statistics" activeClassName="active">
            Statistics
          </NavLink>

          <NavLink to="/appliedJobs" activeClassName="active">
            Applied Jobs
          </NavLink>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </nav>
      </div>
      <div>
        <button className="btn">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
