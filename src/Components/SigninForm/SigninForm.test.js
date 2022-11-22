import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SigninForm from './SigninForm';

describe('<SigninForm />', () => {
  test('it should mount', () => {
    render(<SigninForm />);
    
    const signinForm = screen.getByTestId('SigninForm');

    expect(signinForm).toBeInTheDocument();
  });
});