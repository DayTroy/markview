import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

import './App.css'

function App() {
  const [markdown, setMarkDown] = useState('#Markdown Preview')
  const handleChange = event => setMarkDown(event.target.value)
  return (
    <main>
      <section className="markdown">
        <textarea id='editor' value={markdown} onChange={handleChange}></textarea>
        <article id='preview'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App
