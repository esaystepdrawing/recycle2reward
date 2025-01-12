import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login/index';
import Signup from './signup/index';
import reportWebVitals from './reportWebVitals';
import "typeface-roboto";
import { BrowserRouter, Routes, Route } from "react-router";



const root = ReactDOM.createRoot(document.getElementById('recycle2reward'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
