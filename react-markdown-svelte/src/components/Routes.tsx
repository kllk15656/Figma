import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FigmaTutorial from "./Tutorial";
import Notes from "./Notes";
import PresentationPage from "./Presentation"; 
import "./Home.css";

// Home page component
const Home: React.FC = () => (
  <div className="home">
    <img src="/welcomewebsite.png" alt="Home" className="center-image" />
    <p>
      Figma is a browser-based design and prototype tool used for UI/UX design,
      web, and application interfaces, and allows project collaboration.
    </p>
    <div className="fun-fact-box">
      <h3>💡 Fun Fact</h3>
      <p>The Welcome message was created by the Figma design Feature!</p>
      <img
        src="/Design.png"
        alt="Fun fact illustration"
        className="fun-fact-image"
      />
    </div>
  </div>
);

// Main App Routes
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Presentation" element={<PresentationPage />} /> 
        <Route path="/Tutorial" element={<FigmaTutorial />} />
        <Route path="/Supporting" element={<Notes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;