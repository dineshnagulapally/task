import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return(
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name"></input>
            <button type="submit" style={{backgroundColor:'red'}}></button>
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.querySelector('#root')
)