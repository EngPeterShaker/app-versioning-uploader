import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
// import SpeedDials from './components/SpeedDials'

class App extends Component {
  async componentDidMount() {
    // const response = await fetch('/api/apps');
    // const json = await response.json();
    // console.log(json);
  }

  render() {
    return (
      <div className="App" style={{height: '120%'}}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <List />
        {/* <SpeedDials /> */}
      </div>
    );
  }
}

export default App;
