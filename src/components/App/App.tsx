import React, { Component } from 'react';
import './App.css';
import Table, {rows} from '../Table/Table';
import Button from "../Shared/Button/Button";

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="Table-header"><b>Admin log's table</b></p>
                <Button>New</Button>
                <Table rows = {rows}/>
            </div>
        );
    }
}

export default App;

/*import React from 'react';
import './App.css';

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