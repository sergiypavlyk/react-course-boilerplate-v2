import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} exact="true" />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" element={<EditExpensePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
