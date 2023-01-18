import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds.

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function CounterGame () {
  // const [dis, changeDis] = useState(false)
  const [time, changeTime] = useState(10)
  const [tap, incTap] = useState(0)

  const id = useRef(null)

  const clear =()=>window.clearInterval(id.current)

    useState(()=>{
      id.current = window.setInterval(()=>{
        changeTime((time=>time-1))
      }, 1000)
      return clear
    }, [])
    useEffect(()=>{
      if(time == 0){
        clear()
      }
    }, [time])

  return (
    <div className="App">
      <h1>{time}</h1>
      {time!=0 && <h1><button onClick={()=>incTap((c)=>c+1)}>Tap</button></h1>}
      <div>Tap  times :<b>{tap}</b> </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<CounterGame />);

