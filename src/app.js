import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promises';
import { getAuth } from "firebase/auth";
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
  }
}

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(<LoadingPage />);

getAuth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
  }
  else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
