import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const uniqueLetter = (text) => {
    const letters = text
      .split(" ")
      .map((word) =>
        word.split("").find((e) => word.indexOf(e) === word.lastIndexOf(e))
      )
      .filter((e) => e);
    return letters.find((e) => letters.indexOf(e) === letters.lastIndexOf(e));
  };

  return (
    <>
      <h1>Find your Unique symbol</h1>
      <textarea
        rows={10}
        cols={50}
        placeholder="Enter you text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      {text && (
        <>
          {uniqueLetter(text) ? (
            <p className="answer">
              Unique symbol is{" "}
              <span className="answer-span">{uniqueLetter(text)}</span>
            </p>
          ) : (
            <p className="answer">Null unique symbol </p>
          )}
        </>
      )}
    </>
  );
}

export default App;
