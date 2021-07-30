// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [alphabet, setAlphabet] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  const [shift, setShift] = useState(0);
  const [cypherText, setCypherText] = useState("");
  const [plainText, setPlainText] = useState("");

  const handleShiftPlus = (e) => {
    e.preventDefault();
    if (shift < 26) {
      console.log("Shifting...");
      const target = alphabet[alphabet.length - 1];
      alphabet.pop();
      alphabet.unshift(target);
      console.log(alphabet);
      setShift(shift + 1);
    } else {
      console.log("Cannot go past 26");
    }
  };

  const handleShiftMinus = (e) => {
    e.preventDefault();
    if (shift > -26) {
      console.log("Shifting...");
      const target = alphabet[0];
      alphabet.shift();
      alphabet.push(target);
      console.log(alphabet);
      setShift(shift - 1);
    } else {
      console.log("Cannot go past -26");
    }
  };

  const handlePlainText = (e) => {
    e.preventDefault();
    setPlainText(e.target.value);
  };

  console.log(plainText);

  return (
    <header className="container text-white">
      <section className="row">
        <div className="col text-center">
          <h1>Caesar Cipher</h1>
        </div>
      </section>
      <section className="row">
        <div className="col-6 mx-auto">
          <label htmlFor="plainText" className="form-label">
            Plain Text
          </label>
          <textarea className="form-control" id="plainText" rows="4" onChange={handlePlainText}></textarea>
        </div>
      </section>

      <section className="col-6 mx-auto my-5">
        <div className="d-grid gap-2">
          <section className="row justify-content-center ">
            <div className="col text-end my-auto">
              <button className="btn btn-primary px-4" type="button" onClick={handleShiftMinus}>
                -
              </button>
            </div>
            <div className="col-2 text-center">
              <h3>{shift}</h3>
            </div>
            <div className="col text-start my-auto">
              <button className="btn btn-primary px-4" type="button" onClick={handleShiftPlus}>
                +
              </button>
            </div>
          </section>
          <button className="btn btn-primary">Encrypt</button>
          <button className="btn btn-primary">Decrypt</button>
        </div>
      </section>

      <section className="row">
        <div className="col-6 mx-auto p-2">
          <label htmlFor="cypherText" className="form-label">
            Cipher Text
          </label>
          <textarea className="form-control" id="cypherText" rows="4"></textarea>
        </div>
      </section>
    </header>
  );
}

export default App;
