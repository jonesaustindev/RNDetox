import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {SignInForm} from '../SignInForm';

afterEach(() => {
  cleanup();
});

it('renders SignInForm', () => {
  const handleSignIn = jest.fn();
  const {getByTestId} = render(<SignInForm handleSignIn={handleSignIn} />);

  expect(getByTestId('signInEmailInput')).toBeTruthy();
  expect(getByTestId('signInPasswordInput')).toBeTruthy();
});

test('user can enter their email/password and press sign in button', () => {
  const handleSignIn = jest.fn();
  const {getByTestId} = render(<SignInForm handleSignIn={handleSignIn} />);

  const emailInput = getByTestId('signInEmailInput');
  const passwordInput = getByTestId('signInPasswordInput');
  const signInButton = getByTestId('signInSubmitButton');

  fireEvent.changeText(emailInput, 'test@test.com');
  fireEvent.changeText(passwordInput, 'Password123!');

  fireEvent.press(signInButton);
  expect(handleSignIn).toBeCalledTimes(1);
});
