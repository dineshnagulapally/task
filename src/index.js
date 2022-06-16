import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const btn = {text:'submit'};
    return(
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"></input>
            <button type="submit" style={{backgroundColor:'red'}}>{btn.text}</button>
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.querySelector('#root')
)