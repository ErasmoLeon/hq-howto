import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from '../../src/elements/Icon';

test('should render', () => {
  const wrapper = shallow(
    <Icon name='foo' isMedium isLarge isSmall />
  );
  expect(wrapper.contains(
    <span className="icon is-medium is-large is-small">
      <i className="fa fa-foo" />
    </span>
  )).toBeTruthy();
});
