import React from 'react'
import App from './pages/App'
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById( "app" );

ReactDOM.hydrate( <BrowserRouter>
                    <App></App>
                </BrowserRouter> ,app );

