const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyAbj9QUdnZ5RCOEleSJJO6pn376xtycbZM",
    authDomain: "simplecrud-da6be.firebaseapp.com",
    databaseURL: "https://simplecrud-da6be.firebaseio.com",
    projectId: "simplecrud-da6be",
    storageBucket: "simplecrud-da6be.appspot.com",
    messagingSenderId: "1049017844893",
    appId: "1:1049017844893:web:ffadae595442c623"
  };

const start = () => firebase.initializeApp(config);

