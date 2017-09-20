import React from 'react';
import { shallow } from 'enzyme';

import { Image } from '../../src/elements/Image';

test('should render', () => {
  const wrapper = shallow(
    <Image src='https://lol.image' ratio={[5,6]} size={5} isSquare />
  );
  expect(wrapper.contains(
    <figure className="image is-square is-5x5 is-5by6">
      <img src="https://lol.image" />
    </figure>
  )).toBeTruthy();
});
