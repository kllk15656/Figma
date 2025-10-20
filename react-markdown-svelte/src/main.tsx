// Import React to use JSX (the syntax for writing UI elements)
import React from "react";

// Import ReactDOM, which allows React to interact with the actual HTML DOM
// The 'client' version is used for rendering in the browser (not on the server)
import ReactDOM from "react-dom/client";

// Import the main routing component of the app (where all routes/pages are defined)
import AppRoutes from "./components/Routes";

// Import global CSS styles that apply to the entire app
import "./index.css";

// Create the root React element — this connects React to the <div id="root"> in index.html
// The exclamation mark (!) tells TypeScript that we're sure "root" exists in the DOM.
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode> helps catch potential problems in development
  // It doesn’t affect the production build, only logs warnings in dev mode.
  <React.StrictMode>
    {/* Render the main app routes (which will handle navigation between pages) */}
    <AppRoutes />
  </React.StrictMode>
);


