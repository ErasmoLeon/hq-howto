import React from 'react';
import {shallow} from 'enzyme';
import {Wrapp} from '../../src/elements/Wrapp';

const Lol = ({children}) => Wrapp('a',children,'span');

test('should render', () => {
  const w = shallow(
      <Lol><div>123</div></Lol>
  );
  expect(
    w.contains(
      <span className="a">
        <div>
          123
        </div>
      </span>
    )
  ).toBeTruthy();
})
