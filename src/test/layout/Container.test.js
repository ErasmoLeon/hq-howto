import React from 'react';
import {shallow} from 'enzyme';
import {Container} from '../../src/layout/Container';

test('should render Container', () => {
  const wrapper = shallow(
    <Container>
      <div>123</div>
    </Container>
  );
  expect(wrapper.contains(
    <div className="container">
      <div>
        123
      </div>
    </div>
  )).toBeTruthy();
});
