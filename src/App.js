import React, { Component } from "react";

import "./App.css";
import Nav from "./components/Nav";
import TimeLine from "./components/TimeLine";
import { Button, ButtonToolbar, Navbar } from "react-bootstrap";
// import Tweet from './components/Tweet.js';

// import TwitterLogin from './components/TwitterLogin.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <Nav />
        </div>
        <section>
          <TimeLine />
        </section>
      </div>
    );
  }
}

export default App;
