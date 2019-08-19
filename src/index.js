import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyA_ROJW0wK8qdSIUgSUPRCdbi9YYe1YJ2A",
  authDomain: "chat-app-91d10.firebaseapp.com",
  databaseURL: "https://chat-app-91d10.firebaseio.com",
  projectId: "chat-app-91d10",
  storageBucket: "chat-app-91d10.appspot.com",
  messagingSenderId: "971348583635",
  appId: "1:971348583635:web:ea343e8e31215400"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
