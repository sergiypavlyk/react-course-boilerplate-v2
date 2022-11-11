import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  render(
    <BrowserRouter>
      <Header startLogout={() => {}} />
    </BrowserRouter>
  )
  expect(screen.getByRole('heading').textContent).toBe('Expensify')
})

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

test('click event', () => {
  const startLogout = jest.fn();

  const { getByRole } = render(<Header startLogout={startLogout} />);
  const button = getByRole('button');

  fireEvent.click(button);
  expect(startLogout).toHaveBeenCalledTimes(1);
});

