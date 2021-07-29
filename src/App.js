// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [shitf, setShift] = useState(0);
  const [cypherText, setCypherText] = useState("");
  const [plainText, setPlainText] = useState("");

  return (
    <header className="App-header">
      <div className="row">
        <h1>Caesar Cipher</h1>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary">-</button>
        </div>
        <div className="col">
          <p>{shitf}</p>
        </div>
        <div className="col">
          <button className="btn btn-primary">+</button>
        </div>
      </div>
    </header>
  );
}

export default App;
