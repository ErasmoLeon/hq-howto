import React from 'react';
import {shallow} from 'enzyme';
import {Columns, Column} from '../../src/layout/Columns';

test('should render Column', () => {
  const wrapper = shallow(
    <Column width={2} offset={4} isDesktop isHalf>
      <div>123</div>
    </Column>
  );
  expect(wrapper.contains(
    <div className="column is-2 is-offset-4 is-half is-desktop">
      <div>123</div>
    </div>
  )).toBeTruthy();
});

test('should render Columns', () => {
  const wrapper = shallow(
    <Columns>
      <Column>
        <div>123</div>
      </Column>
      <Column>
        <div>321</div>
      </Column>
    </Columns>
  );
  expect(wrapper.contains(
    <div className="columns">
      <Column>
        <div>
          123
        </div>
      </Column>
      <Column>
        <div>
          321
        </div>
      </Column>
    </div>
  )).toBeTruthy();
});
