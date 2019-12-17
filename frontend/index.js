import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import Main from './src/containers/Main'

ReactDOM.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>,
    document.getElementById('app')
);
