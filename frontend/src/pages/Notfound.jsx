// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1>⚠️ Page Not Found</h1>
      <p>Oops! Looks like you're lost.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default NotFound;
