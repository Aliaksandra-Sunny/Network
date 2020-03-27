import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import  {Provider} from "./StoreContext";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
        </BrowserRouter>, document.getElementById('root'));
};
renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});