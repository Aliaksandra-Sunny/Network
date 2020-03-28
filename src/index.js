import React from 'react';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
        </BrowserRouter>, document.getElementById('root'));
};
renderEntireTree();
store.subscribe(() => {
    renderEntireTree();
});