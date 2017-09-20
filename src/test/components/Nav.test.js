import React from 'react';
import {shallow} from 'enzyme';

import {
  NavToggle,
  NavItem,
  NavRight,
  NavCenter,
  NavLeft,
  Nav
} from '../../src/components/Nav';

test('should render Nav', () => {
  const wrapper = shallow(
    <Nav>
      <div>
        foo
      </div>
    </Nav>
  );
  expect(wrapper.contains(
    <nav className="nav">
      <div>
        foo
      </div>
    </nav>
  )).toBeTruthy();
});


test('should render NavLeft', () => {
  const wrapper = shallow(
    <NavLeft>
      <div>
        foo
      </div>
    </NavLeft>
  );
  expect(wrapper.contains(
    <div className="nav-left">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render NavCenter', () => {
  const wrapper = shallow(
    <NavCenter>
      <div>
        foo
      </div>
    </NavCenter>
  );
  expect(wrapper.contains(
    <div className="nav-center">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render NavRight', () => {
  const wrapper = shallow(
    <NavRight menu>
      <div>
        foo
      </div>
    </NavRight>
  );
  expect(wrapper.contains(
    <div className="nav-right nav-menu">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render NavItem', () => {
  const wrapper = shallow(
    <NavItem>
      <div>foo</div>
    </NavItem>
  );
  expect(wrapper.contains(
    <a className="nav-item">
      <div>
        foo
      </div>
    </a>
  )).toBeTruthy();
});

test('should render NavToggle', () => {
  const wrapper = shallow(
    <NavToggle>
      <div>foo</div>
    </NavToggle>
  );
  expect(wrapper.contains(
    <span className="nav-toggle">
      <div>
        foo
      </div>
    </span>
  )).toBeTruthy();
});
