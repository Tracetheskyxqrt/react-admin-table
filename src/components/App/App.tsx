import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LogList from '../AdminTable/LogList/LogListContainer';
import LogCreate from '../AdminTable/LogCreate/LogCreateContainer';
import LogUpdate from '../AdminTable/LogUpdate/LogUpdateContainer';
import LogView from '../AdminTable/Log/LogContainer';
import NotFound from '../NotFound/NotFound';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Switch>
                        <Route exact={true} path='/' component={LogList} />
                        <Route path='/create' component={LogCreate} />
                        <Route path='/update/:id' component={LogUpdate} />
                        <Route exact={true} path='/:id' component={LogView} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

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