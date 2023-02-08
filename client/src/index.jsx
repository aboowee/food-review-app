import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <div>this is a test</div>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))