import React from 'react';
import renderer from 'react-test-renderer';
import AppText from '../Components/AppText';

test('renders correctly', () => {
  const json = renderer.create(<AppText />).toJSON();
  console.log(json.props.style)
  expect(json.props.style.opacity).toBe(1);
});