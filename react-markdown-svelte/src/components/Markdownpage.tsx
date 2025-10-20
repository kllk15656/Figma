// Import React so we can use JSX syntax for rendering components
import React from "react";
// Import ReactMarkdown — this library converts Markdown text (like from .md files)
// into formatted HTML elements that React can render.
import ReactMarkdown from "react-markdown";

// Define an interface (a TypeScript feature) to specify the expected props
// for this component. It ensures that the 'content' prop must be a string.
// This helps catch errors at compile-time if we pass something else.
interface MarkdownPageProps {
  content: string;
}

// Define the functional component 'MarkdownPage' using React.FC (Functional Component)
// It takes 'content' as a prop, which is the Markdown text to be displayed.
const MarkdownPage: React.FC<MarkdownPageProps> = ({ content }) => {
  return (
    // The outer div provides padding and line spacing for better readability
    // Adding 'color: "#000"' ensures the text is visible on a light/white background.
    // Without this, text may appear invisible if CSS sets a default white color elsewhere.
    <div style={{ padding: "20px", lineHeight: "1.6", color: "#000" }}>
      {/* ReactMarkdown component takes the Markdown text (from 'content')
          and automatically renders it as properly formatted HTML.
          Example: '# Title' in Markdown becomes <h1>Title</h1> in HTML. */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

// Export the component so other files (like Notes.tsx or Routes.tsx)
// can import and use it to display Markdown content.
// This makes MarkdownPage reusable across the app for any Markdown content.
export default MarkdownPage;
