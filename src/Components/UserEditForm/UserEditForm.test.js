import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserEditForm from './UserEditForm';

describe('<UserEditForm />', () => {
  test('it should mount', () => {
    render(<UserEditForm />);

    const UserEditForm = screen.getByTestId('UserEditForm');

    expect(UserEditForm).toBeInTheDocument();
  });
});