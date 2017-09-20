import React from 'react';
import {shallow} from 'enzyme';
import {Footer} from '../../src/layout/Footer';

test('should render Footer', () => {
  const wrapper = shallow(
    <Footer>
      <div>123</div>
    </Footer>
  );
  expect(wrapper.contains(
    <footer className="footer">
      <div>
        123
      </div>
    </footer>
  )).toBeTruthy();
});
