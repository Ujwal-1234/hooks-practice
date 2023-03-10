import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

function Wait ({ delay = 1000, placeholder, ui }) {
  const [uidisp, uiShow] = React.useState(false)
  React.useEffect(() => {
    const id = window.setTimeout(() => {
      uiShow(true)
    }, delay)
  }, [])
  return uidisp === true?ui:placeholder
}

function App() {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

