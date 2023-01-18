import { func } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './styles.css'

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using
  the useState Hook.
*/


function Theme() {
    const [theme, changeTheme] = useState("light")
    // toDark = () =>changeTheme("dark")
    function toDark(){
      changeTheme("dark")
    }
    // toLight = () => changeTheme("light")
    function toLight(){
      changeTheme("light")
    }

    return (
      <div className={theme}>
        {theme === "light"
          ? <button onClick={toDark}>ð¦</button>
          : <button onClick={toLight}>ð¡</button>}
      </div>
    )

}


// class Theme extends React.Component {
//   state = {
//     theme: "light"
//   }
//   toDark = () => this.setState({ theme: "dark" })
//   toLight = () => this.setState({ theme: "light" })
//   render() {
//     const { theme } = this.state

//     return (
//       <div className={theme}>
//         {theme === "light"
//           ? <button onClick={this.toDark}>ð¦</button>
//           : <button onClick={this.toLight}>ð¡</button>}
//       </div>
//     )
//   }
// }

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Theme />);
