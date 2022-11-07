import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(<AppRouter />);
