import React from 'react';
import './index.css';
import state, {subscribe} from './redux/State'
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, updateNewPostText} from "./redux/State";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree=(state)=>{
    ReactDOM.render(<BrowserRouter>
        <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>
    </BrowserRouter>, document.getElementById('root'));
};

renderEntireTree(state);
subscribe(renderEntireTree);