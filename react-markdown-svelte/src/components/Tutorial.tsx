// Import React so we can use JSX (the HTML-like syntax inside JavaScript)
import React from "react";

// Import the Figma tutorial Markdown file as raw text using the '?raw' flag.
// Vite allows this so that the Markdown content can be rendered directly in the app.
import FigmaTutorial from "../content/Tutorial.md?raw";

// Import the MarkdownPage component — this component is responsible
// for displaying the Markdown content nicely on the screen.
import MarkdownPage from "./Markdownpage";

// Define a functional React component named "Tutorial"
const Tutorial: React.FC = () => {
  return (
    // This is the main container for the tutorial page content
    <div>
      {/* Page title — displayed above the markdown content */}
      <h1 className="text-2xl font-bold text-center my-4">Figma Tutorial</h1>

      {/* The MarkdownPage component takes a 'content' prop which is the Markdown text.
          Here we pass in the raw content imported from FigmaTutorial.md */}
      <MarkdownPage content={FigmaTutorial} />
    </div>
  );
};

// Export the component so it can be imported and used in other files (like Routes.tsx)
export default Tutorial;
