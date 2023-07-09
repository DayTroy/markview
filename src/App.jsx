import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
import editIcon from "./assets/icons/edit-icon.svg";
import previewIcon from "./assets/icons/preview-icon.svg";
import Header from "./components/Header";

const App = () => {
  const defaultText =
    "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine){\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\n ### Feel Free :D";
  const [markdown, setMarkDown] = useState(defaultText);
  const handleChange = (event) => setMarkDown(event.target.value);
  return (
    <main>
      <section className="markdown">
        <div className="editor-wrapper">
          <Header icon={editIcon} text="Editor" />
          <textarea
            id="editor"
            className="card"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="preview-wrapper">
          <Header icon={previewIcon} text="Previewer" />
          <article id="preview" className="card">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </section>
    </main>
  );
};

export default App;
