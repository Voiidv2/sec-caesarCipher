// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  // const [cipherText, setCipherText] = useState("");
  // const [plainText, setPlainText] = useState("");

  const handleShiftPlus = (e) => {
    e.preventDefault();
    if (shift < 26) {
      const target = cipherAlphabet[cipherAlphabet.length - 1]; // Selecting the last element in the array
      cipherAlphabet.pop(); // Remove a letter from the end of an array
      cipherAlphabet.unshift(target); // Add the target letter to the beginning of an array
      console.log("Set shift to", shift);
      setShift(shift + 1); // Increment shift by one
    } else {
      console.log("Cannot go past 26");
    }
  };

  const handleShiftMinus = (e) => {
    e.preventDefault();
    if (shift > -26) {
      const target = cipherAlphabet[0]; // Selecting the first element in the array
      cipherAlphabet.shift(); // Remove an item from the beginning of an array
      cipherAlphabet.push(target); // Add target letter to the end of an array
      console.log("Set shift to", shift);
      setShift(shift - 1); // Decrement shift by one
    } else {
      console.log("Cannot go past -26");
    }
  };

  const Encrypt = ({ handleShiftPlus, handleShiftMinus }) => {
    const [cipherText, setCipherText] = useState("");
    const [plainText, setPlainText] = useState("");

    const handlePlainText = () => {
      const plainTextArray = plainText.split(""); // Splitting plainText into an array
      const cipherTextArray = plainTextArray.map((ltr) => convertToCipher(ltr.toLowerCase())); // Get the letters from plainTextArray and shift each individual letter
      setCipherText(cipherTextArray.join("")); // Setting ciperTextArray joined into a string as cipherText
    };

    const convertToCipher = (character) => {
      // if the alphabet includes the character
      if (alphabet.includes(character)) {
        const plainIdx = alphabet.indexOf(character); // then get the index of the character in the alphabet
        return cipherAlphabet[plainIdx]; // and return the character with the same index in shifted cipherAlphabet
      } else {
        // if the condition fails
        return character; // return the character
      }
    };

    // Run the handlePlainText function every time plainText changes states
    useEffect(() => {
      handlePlainText();
    }, [plainText]);
    return (
      <div className="text-white my-5">
        <h4 className="text-center">Encrypt</h4>
        <section className="row">
          <div className="col-6 mx-auto">
            <label htmlFor="plainText" className="form-label">
              Plain Text
            </label>
            <textarea
              className="form-control"
              id="plainText"
              rows="7"
              // defaultValue={plainText}
              onChange={(e) => setPlainText(e.target.value)}
              autoFocus
            ></textarea>
          </div>
        </section>

        <section className="col-6 mx-auto mt-4 ">
          <div className="d-grid gap-2">
            <h6 className="text-center p-0 m-0">key</h6>
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
          </div>
        </section>

        <section className="row">
          <div className="col-6 mx-auto p-2">
            <label htmlFor="cypherText" className="form-label">
              Cipher Text
            </label>
            <textarea className="form-control" id="cypherText" value={cipherText} rows="7" readOnly></textarea>
          </div>
        </section>
      </div>
    );
  };

  const Decrypt = ({ handleShiftPlus, handleShiftMinus }) => {
    const [cipherText, setCipherText] = useState("");
    const [plainText, setPlainText] = useState("");

    const handleCipher = () => {
      const cipherTextArray = cipherText.split(""); // Splitting cipherTextArray into an array
      const plainTextArray = cipherTextArray.map((ltr) => convertToPlain(ltr.toLowerCase())); // Get the letters from cipherTextArray and shift each individual letter
      setPlainText(plainTextArray.join("")); // Setting plainTextArray joined into a string as cipherText
    };

    const convertToPlain = (character) => {
      // if the alphabet includes the character
      if (cipherAlphabet.includes(character)) {
        const cipherIdx = cipherAlphabet.indexOf(character); // then get the index of the character in the alphabet
        return alphabet[cipherIdx]; // and return the character with the same index in shifted cipherAlphabet
      } else {
        // if the condition fails
        return character; // return the character
      }
    };

    // Run the handlePlainText function every time plainText changes states
    useEffect(() => {
      handleCipher();
    }, [cipherText]);

    return (
      <div className="text-white my-5">
        <h4 className="text-center">Decrypt</h4>
        <section className="row">
          <div className="col-6 mx-auto">
            <label htmlFor="plainText" className="form-label">
              Cipher Text
            </label>
            <textarea
              className="form-control"
              id="plainText"
              rows="7"
              onChange={(e) => setCipherText(e.target.value)}
              autoFocus
            ></textarea>
          </div>
        </section>

        <section className="col-6 mx-auto mt-4 ">
          <div className="d-grid gap-2">
            <h6 className="text-center p-0 m-0">key</h6>
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
          </div>
        </section>

        <section className="row">
          <div className="col-6 mx-auto p-2">
            <label htmlFor="cypherText" className="form-label">
              Plain Text
            </label>
            <textarea className="form-control" id="cypherText" value={plainText} rows="7" readOnly></textarea>
          </div>
        </section>
      </div>
    );
  };

  return (
    <Router>
      <header className="container text-white">
        <section className="row mt-3">
          <div className="col text-center">
            <h1>Caesar Cipher</h1>
          </div>
        </section>
        <nav className="nav justify-content-center">
          <Link className="nav-link" to="/encrypt">
            Encrypt
          </Link>
          <Link className="nav-link" to="/decrypt">
            Decrypt
          </Link>
        </nav>
        {/* <Encrypt handleShiftPlus={handleShiftPlus} handleShiftMinus={handleShiftMinus} /> */}
        {/* <Decrypt handleShiftPlus={handleShiftPlus} handleShiftMinus={handleShiftMinus} /> */}
      </header>

      <Switch>
        <Route
          path="/encrypt"
          render={() => <Encrypt handleShiftPlus={handleShiftPlus} handleShiftMinus={handleShiftMinus} />}
        />
        <Route
          path="/decrypt"
          render={() => <Decrypt handleShiftPlus={handleShiftPlus} handleShiftMinus={handleShiftMinus} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
