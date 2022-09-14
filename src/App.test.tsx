import React from 'react';
import { render } from '@testing-library/react';
import Data from './Data';

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