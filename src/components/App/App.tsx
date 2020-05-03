import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { HashRouter, Route, Switch } from 'react-router-dom';
import LogList from '../AdminTable/LogList/LogListContainer';
import LogCreate from '../AdminTable/LogCreate/LogCreateContainer';
import LogUpdate from '../AdminTable/LogUpdate/LogUpdateContainer';
import NotFound from '../NotFound/NotFound';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Switch>
                        <Route exact={true} path='/' component={LogList} />
                        <Route path='/create' component={LogCreate} />
                        <Route path='/update/:id' component={LogUpdate} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </HashRouter>
>>>>>>> d3b27784f678fac9aeee558d2f3756a51b6aed60
            </div>
        );
    }
}
<<<<<<< HEAD

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
=======
>>>>>>> d3b27784f678fac9aeee558d2f3756a51b6aed60
