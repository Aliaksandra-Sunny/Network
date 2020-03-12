import React from 'react';
import './index.css';
import store from './redux/State'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} updateNewMessageText={store.updateNewMessageText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addPost={store.addPost.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);