import React from 'react';
import {shallow} from 'enzyme';

import {Level, LevelLeft, LevelRight, LevelItem} from '../../src/components/Level';

test('should render level', () => {
  const wrapper = shallow(
    <Level>
      <div>foo</div>
    </Level>
  )
  expect(wrapper.contains(
    <nav className='level'>
      <div>
        foo
      </div>
    </nav>
  )).toBeTruthy();
})

test('should render level left', () => {
  const wrapper = shallow(
    <LevelLeft>
      <div>foo</div>
    </LevelLeft>
  )
  expect(wrapper.contains(
    <div className='level-left'>
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
})

test('should render level right', () => {
  const wrapper = shallow(
    <LevelRight>
      <div>foo</div>
    </LevelRight>
  )
  expect(wrapper.contains(
    <div className='level-right'>
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
})

test('should render level item', () => {
  const wrapper = shallow(
    <LevelItem>
      <div>foo</div>
    </LevelItem>
  )
  expect(wrapper.contains(
    <div className='level-item'>
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
})
