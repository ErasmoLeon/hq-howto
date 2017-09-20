import React from 'react';
import {shallow} from 'enzyme';

import {Box} from '../../src/elements/Box';

test('should render', () => {
  const wrapper = shallow(
    <Box>
      <div>123</div>
    </Box>
  );
  expect(wrapper.contains(
    <div className='box'>
      <div>123</div>
    </div>
  )).toBeTruthy();
});
