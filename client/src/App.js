import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GlobalProvider, GlobalContext} from './GlobalProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <GlobalProvider>
            <GlobalContext.Consumer>
              {val => <div>{val}</div>}
            </GlobalContext.Consumer>
          </GlobalProvider>
        </header>
      </div>
    );
  }
}

export default App;
