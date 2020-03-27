import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./StoreContext";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
};
renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});