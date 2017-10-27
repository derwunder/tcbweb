import React, { Component } from 'react';
import { Logo, HomeCss } from './../../directory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Component desde <code>src/Components/home/test.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
