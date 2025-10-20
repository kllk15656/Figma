import React from "react";
import { Link } from "react-router-dom"; // Link allows navigation without page reload
import "./Header.css"; // Import CSS file for styling the header

// Header component containing title and navigation links
const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Main title of the app */}
      <h1>Figma</h1>

      {/* Navigation buttons */}
      <nav>
        <Link to="/">Home</Link>           {/* Link to welcome page */}
        <Link to="/tutorial">Tutorial</Link>  {/* Link to Tutorial page */}
        <Link to="/presentation">Presentation</Link> {/* Link to Presentation page */}
        <Link to="/Supporting">Notes</Link>  {/* Link to notes page */}

      </nav>
    </header>
  );
};

export default Header;
