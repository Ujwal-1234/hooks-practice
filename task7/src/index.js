import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds.
*/

function useWait (delay) {
  const [return_data, changeData] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      changeData(true)
    }, delay)
  })
  return return_data
}

function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay)

  return show === true
    ? ui
    : placeholder
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

