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
  const [cipherAlphabet, setCipherAlphabet] = useState([
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
  const [cipherText, setCipherText] = useState("");
  const [plainText, setPlainText] = useState("");

  const handleShiftPlus = (e) => {
    e.preventDefault();
    if (shift < 26) {
      const target = cipherAlphabet[cipherAlphabet.length - 1]; // Selecting the last element in the array
      cipherAlphabet.pop();
      cipherAlphabet.unshift(target);
      setShift(shift + 1);
    } else {
      console.log("Cannot go past 26");
    }
  };

  const handleShiftMinus = (e) => {
    e.preventDefault();
    if (shift > -26) {
      const target = cipherAlphabet[0]; // Selecting the first element in the array
      cipherAlphabet.shift();
      cipherAlphabet.push(target);
      setShift(shift - 1);
    } else {
      console.log("Cannot go past -26");
    }
  };

  const handlePlainText = () => {
    const plainTextArray = plainText.split("");
    const cipherTextArray = plainTextArray.map((ltr) => test(ltr.toLowerCase()));
    setCipherText(cipherTextArray.join(""));
  };

  const test = (letter) => {
    if (alphabet.includes(letter)) {
      const plainIdx = alphabet.indexOf(letter);
      return cipherAlphabet[plainIdx];
    } else {
      return letter;
    }
  };

  useEffect(() => {
    handlePlainText();
  }, [plainText]);

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
          <textarea
            className="form-control"
            id="plainText"
            rows="7"
            placeholder={plainText}
            onChange={(e) => setPlainText(e.target.value)}
            autoFocus
          ></textarea>
        </div>
      </section>

      <section className="col-6 mx-auto mt-4 pt-2">
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
          {/* <button className="btn btn-primary">Encrypt</button>
          <button className="btn btn-primary">Decrypt</button> */}
        </div>
      </section>

      <section className="row">
        <div className="col-6 mx-auto p-2">
          <label htmlFor="cypherText" className="form-label">
            Cipher Text
          </label>
          <textarea className="form-control" id="cypherText" placeholder={cipherText} rows="7"></textarea>
        </div>
      </section>
    </header>
  );
}

export default App;
