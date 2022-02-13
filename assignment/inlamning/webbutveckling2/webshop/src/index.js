import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ShoppingCartContextProvider} from "./context/ShoppingCartContext";

ReactDOM.render(
    <React.StrictMode>
        <ShoppingCartContextProvider>
            <App/>
        </ShoppingCartContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
