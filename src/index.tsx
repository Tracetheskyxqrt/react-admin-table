//import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import * as moment from 'moment';
import { Provider } from 'react-redux';
import 'moment/locale/ru';
import { configStore } from './reducers/configStore';
//import './styles/index.scss';
import App from './components/App/App';


moment.locale('ru');
ReactDOM.render(
    <Provider store={configStore()}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
