import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Data from './Data';

test('renders React TypeScript', () => {
  render(<App />);
  const linkElement = screen.getByText(/React TypeScript With Testing Component's/i);
  expect(linkElement).toBeInTheDocument();
});

test('check testing data', () => {
  const renderResponse = render(<Data />);
  const dataElement = renderResponse.getByText(/testing data/i);
  expect(dataElement).toBeInTheDocument();
});

test('find input placeholder', () => {
  const renderResponse = render(<Data />);
  const dataElement = renderResponse.getByPlaceholderText(/Please enter/i);
  expect(dataElement).toBeInTheDocument();
});