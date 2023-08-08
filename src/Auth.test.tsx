import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from './Auth';
import { Auth0Client } from '@auth0/auth0-spa-js';

jest.mock('@auth0/auth0-spa-js');

describe('AuthProvider component', () => {
  it('renders without crashing', () => {
    (Auth0Client as jest.Mock).mockImplementation(() => {
      return {
        isAuthenticated: false,
        user: undefined,
        signIn: jest.fn(),
        signOut: jest.fn(),
        loading: false,
      };
    });

    const { container } = render(
      <AuthProvider>
        <div>Test child component</div>
      </AuthProvider>
    );
    expect(container).toBeTruthy();
  });

  // Add more tests as needed
});