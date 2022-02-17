import React from 'react';
import {render} from '@testing-library/react-native';
import {RNTestButton} from '../Button';

it('renders button', () => {
  const button = render(
    <RNTestButton text="Testing" onPress={jest.fn} testID="testButton" />,
  );
  expect(button).toMatchSnapshot();
});
