import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
