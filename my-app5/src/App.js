import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'; // Import CSS for styling

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={null} /> {/* Default: Show nothing */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
