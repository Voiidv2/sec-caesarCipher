// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [shift, setShift] = useState(0);
  const [cypherText, setCypherText] = useState("");
  const [plainText, setPlainText] = useState("");

  return (
    <header className="container text-white">
      <section className="row">
        <div className="col text-center">
          <h1>Caesar Cipher</h1>
        </div>
      </section>
      <section className="row">
        <div className="col-6 mx-auto">
          <label for="plainText" class="form-label">
            Plain Text
          </label>
          <textarea class="form-control" id="plainText" rows="4"></textarea>
        </div>
      </section>

      <section className="col-6 mx-auto my-5">
        <div className="d-grid gap-2">
          <section className="row justify-content-center ">
            <div class="col text-end my-auto">
              <button class="btn btn-primary px-4" type="button">
                -
              </button>
            </div>
            <div class="col-2 text-center">
              <h3>{shift}</h3>
            </div>
            <div class="col text-start my-auto">
              <button class="btn btn-primary px-4" type="button">
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
          <label for="cypherText" class="form-label">
            Cypher Text
          </label>
          <textarea class="form-control" id="cypherText" rows="4"></textarea>
        </div>
      </section>
    </header>
  );
}

export default App;
