import React from 'react';
import {render} from '@testing-library/react-native';
import {Splash} from '../Splash';

it('renders splash', () => {
  const loader = render(<Splash />);
  expect(loader).toMatchSnapshot();
});
