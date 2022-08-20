import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/global.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.body,
);

serviceWorkerRegistration.register();
reportWebVitals();
