import React from "react";
import FigmaPresentation from "../content/Presentation.md?raw";
import MarkdownPage from "./Markdownpage";

const Presentation: React.FC = () => {
  console.log("Presentation component loaded");

  return (
    <div>

      {/* Page title — displayed above the markdown content */}
      <img
        src="/figmapresentation.png"
        alt="Figma PResentation"
        className="center-image"
      />

      {/* Markdown content from Presentation.md */}
      <MarkdownPage content={FigmaPresentation} />
    </div>
  );
};

export default Presentation;