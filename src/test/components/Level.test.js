import React from 'react';
import {shallow} from 'enzyme';

import {
  LevelItem,
  LevelLeft,
  LevelRight,
  Level
} from '../../src/components/Level';

test('should render LevelItem', () => {
  const wrapper = shallow(
    <LevelItem>
      <div>123</div>
    </LevelItem>
  );
  expect(wrapper.contains(
    <div className="level-item">
      <div>
        123
      </div>
    </div>
  )).toBeTruthy();
});

test('should render LevelLeft', () => {
  const wrapper = shallow(
    <LevelLeft>
      <div>123</div>
    </LevelLeft>
  );
  expect(wrapper.contains(
    <div className="level-left">
      <div>
        123
      </div>
    </div>
  )).toBeTruthy();
});

test('should render LevelRight', () => {
  const wrapper = shallow(
    <LevelRight>
      <div>123</div>
    </LevelRight>
  );
  expect(wrapper.contains(
    <div className="level-right">
      <div>
        123
      </div>
    </div>
  )).toBeTruthy();
});

test('should render Level', () => {
  const wrapper = shallow(
    <Level>
      <div>123</div>
    </Level>
  );
  expect(wrapper.contains(
    <nav className="level">
      <div>
        123
      </div>
    </nav>
  )).toBeTruthy();
});
