import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LogList from '../AdminTable/LogList/LogListContainer';
import LogCreate from '../AdminTable/LogCreate/LogCreateContainer';
import LogUpdate from '../AdminTable/LogUpdate/LogUpdateContainer';
//import NotFound from '../NotFound/NotFound';
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
            </div>
        );
    }
}
