import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './store/configureStore'
import Routes from './Routes'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initalState = {}

const store = configureStore(initalState)

ReactDOM.render(
 <Provider store={store} >
   <BrowserRouter>
    <Routes/>
   </BrowserRouter>
 </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
