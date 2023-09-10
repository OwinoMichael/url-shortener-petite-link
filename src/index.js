import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOO-Y9E0mfbMm2_F2WEGu5hXG9-CpjYUY",
  authDomain: "url-shortener-67a0b.firebaseapp.com",
  databaseURL: "https://url-shortener-67a0b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "url-shortener-67a0b",
  storageBucket: "url-shortener-67a0b.appspot.com",
  messagingSenderId: "516320238802",
  appId: "1:516320238802:web:a53906de30b998a2afe10b",
  measurementId: "G-MKGRR5JLM0"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();