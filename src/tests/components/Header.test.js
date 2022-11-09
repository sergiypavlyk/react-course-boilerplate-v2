import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  expect(screen.getByRole('heading').textContent).toBe('Expensify')
})

