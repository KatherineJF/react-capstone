
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TimeLine from './components/TimeLine';
// import Tweet from './components/Tweet.js';


// import TwitterLogin from './components/TwitterLogin.js'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Navbar/>
      <section>
      <TimeLine/>
      </section>
      </div>

    );
  }
}

export default App;
