import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

function App() {
  const [inp, takeInput] = useState("")
  const [dis, changedis] = useState(true)
  React.useEffect(()=>{
    document.title = 240-inp.length
  }, [inp])
  return (
    <div className="App">
      <p>Remaining Characters : {240-inp.length}</p>
      <textarea typeof={"text"} onChange={(e)=>{takeInput(e.target.value)}} value={inp} />
      <button disabled={inp.length>0 && inp.length<240 ? false:true}>POST</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

