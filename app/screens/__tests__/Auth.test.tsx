import React from 'react';
import {render} from '@testing-library/react-native';
import {Auth} from '../Auth';
import {AuthProvider} from '../../context/AuthContext';

jest.mock('../../context/AuthContext', () => {
  const TestReact = require('react');

  const TestAuthContext = TestReact.createContext();

  const TestAuthProvider = ({children, value = {}}: any) => {
    return (
      <TestAuthContext.Provider value={value}>
        {children}
      </TestAuthContext.Provider>
    );
  };

  const useAuthTest = () => {
    const context = TestReact.useContext(TestAuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

  return {
    AuthProvider: TestAuthProvider,
    useAuth: useAuthTest,
  };
});

it('renders Auth screen', () => {
  const {getByTestId} = render(
    <AuthProvider>
      <Auth />
    </AuthProvider>,
  );

  expect(getByTestId('authHeader')).toBeTruthy();
  expect(getByTestId('authSignInForm')).toBeTruthy();
});
