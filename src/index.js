import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogs = [
    {id: 1, name: 'Tolya'},
    {id: 2, name: 'Tanya'},
    {id: 3, name: 'Nastya'},
    {id: 4, name: 'Lena'},
    {id: 5, name: 'Sasha'},
];

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello. Nice to see you!'},
    {id: 3, message: 'You make me smile:)'},
    {id: 4, message: 'It is pleasure for me!'},
]

let posts = [
    {id: 1, message: "Hi, my name is Sasha", likeCount: 10},
    {id: 2, message: "Hello, Sasha! I'm Tolya", likeCount: 11}
]

ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
