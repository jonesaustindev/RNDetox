import React from 'react';
import {render} from '@testing-library/react-native';
import {AuthProvider} from '../../context/AuthContext';
import {Settings} from '../Settings';

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

it.skip('renders Settings screen', () => {
  const {getByTestId} = render(
    <AuthProvider
      value={{
        user: {
          email: 'test@test.com',
          password: 'youshouldntdothis',
        },
        isLoadingUser: false,
        isSignedIn: true,
        saveUser: jest.fn(),
        clearUser: jest.fn(),
      }}>
      <Settings />
    </AuthProvider>,
  );

  expect(getByTestId('settingsUserEmail')).toEqual('test@test.com');
  expect(getByTestId('settingsSignOutButton')).toBeTruthy();
});
