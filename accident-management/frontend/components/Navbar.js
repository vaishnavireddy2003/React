import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // Import the CSS file

function Navbar() {
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/report">Report Accident</Link>
            <Link to="/accidents">Accident List</Link>
        </nav>
    );
}

export default Navbar;
