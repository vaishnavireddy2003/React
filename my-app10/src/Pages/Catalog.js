import React from "react";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="body">
      <h2>Welcome to the Catalog Page!</h2>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Catalog;
