import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Routing tools
import Header from "./Header";           // Import header component
import MarkdownPage from "./Markdownpage"; // Markdown page component
import FigmaTutorial from "./Tutorial";       // Tutorial page component
import Notes from "./Notes";
import Presentation from "../content/Presentation.md?raw"; // Markdown content as raw string
import "./Home.css"; // Import CSS file for styling the home



// Home page component (Welcome page)
const Home: React.FC = () => (
  <div className="home">
    <h2>Welcome to our site</h2>
    <p>Figma is a browser-based design and prototype tool used for UI/UX design, web, and application
 interface, and allows project collaboration.</p>
  </div>
);

// Main App Routes
const AppRoutes: React.FC = () => {
  return (
    <Router>
      {/* Header will always appear on top */}
      <Header />

      {/* Define routes for the app */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home / Welcome page */}
        <Route path="/Presentation" element={<MarkdownPage content={Presentation} />} /> {/* Presentation page */}
        <Route path="/Tutorial" element={<FigmaTutorial />} /> {/* Tutorial page */}
        <Route path="/Supporting" element={<Notes />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
