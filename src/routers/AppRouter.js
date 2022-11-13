import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from "history";
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Routes>

      <Route
        path="/"
        element={
          <PublicRoute
            component={<LoginPage />}
          />
        }
        exact="true"
      />

      <Route path="/dashboard"
        element={
          <PrivateRoute
            component={<DashboardPage />}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
