import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  

  const makePdfHandler = (e) => {
    e.preventDefault()

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      
  };

  

  fetch("/.netlify/functions/chrome", options)
  
      .catch((err) => {
          console.log(err)
  
      });

  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={makePdfHandler}>PDF</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  
}

export default App;
