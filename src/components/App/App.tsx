import React, { Component } from 'react';
import './App.scss';
import LogList from "../AdminTable/LogList/LogList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <LogList/>
            </div>
        );
    }
}

export default App;

/*import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App(dotJS)</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */