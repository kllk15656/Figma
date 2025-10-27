import React from "react";

// Import the Figma tutorial Markdown file as raw text using the '?raw' flag.
// Vite allows this so that the Markdown content can be rendered directly in the app.
import Notes from "../content/Supporting.md?raw";


// Import the MarkdownPage component — this component is responsible
// for displaying the Markdown content nicely on the screen.
import MarkdownPage from "./Markdownpage";

// Define a functional React component named "Tutorial"
const Note: React.FC = () => {
  return (
    // This is the main container for the tutorial page content
    <div>
      {/* Page title — displayed above the markdown content */}
        <img
        src="/figmanotes.png"
        alt="Figma Presentation"
        className="center-image"
      />

      {/* The MarkdownPage component takes a 'content' prop which is the Markdown text.
          Here we pass in the raw content imported from Notes.md */}
      <MarkdownPage content={Notes} />
    </div>
  );
};

// Export the component so it can be imported and used in other files (like Routes.tsx)
export default Note;