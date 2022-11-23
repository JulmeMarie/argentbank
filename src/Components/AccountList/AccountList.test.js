import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountList from './AccountList';

describe('<AccountList />', () => {
  test('it should mount', () => {
    render(<AccountList />);
    
    const accountList = screen.getByTestId('AccountList');

    expect(accountList).toBeInTheDocument();
  });
});