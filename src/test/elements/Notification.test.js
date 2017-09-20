import React from 'react';
import { shallow } from 'enzyme';

import { Notification } from '../../src/elements/Notification';

test('should render', () => {
  const wrapper = shallow(
    <Notification>
      <div>123</div>
    </Notification>
  );
  expect(wrapper.contains(
    <div className='notification'>
      <div>123</div>
    </div>
  )).toBeTruthy();
});
