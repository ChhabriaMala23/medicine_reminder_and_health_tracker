import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/register");
    window.location.reload(); // optional to reset app state
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", marginBottom: "20px", backgroundColor: "grey"}}>
      <Link to="/home" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/medicine" style={{ marginRight: "15px" }}>Medicine</Link>
      <Link to="/hydrate" style={{ marginRight: "15px" }}>Hydration</Link>
      <Link to="/sos" style={{ marginRight: "15px" }}>SOS</Link>
      <button onClick={handleLogout} style={{ marginLeft: "20px" }}>Logout</button>
    </nav>
  );
}
