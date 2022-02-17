import React from 'react';
import {render} from '@testing-library/react-native';
import {Loader} from '../Loader';

it('renders loader', () => {
  const loader = render(<Loader />);
  expect(loader).toMatchSnapshot();
});
