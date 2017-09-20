import React from 'react';
import {shallow} from 'enzyme';

import {
  Media,
  MediaLeft,
  MediaContent
} from '../../src/components/Media';

test('should render MediaContent', () => {
  const wrapper = shallow(
    <MediaContent>
      <div>123</div>
    </MediaContent>
  );
  expect(wrapper.contains(
    <article className="media-content">
      <div>
        123
      </div>
    </article>
  )).toBeTruthy();
});

test('should render MediaLeft', () => {
  const wrapper = shallow(
    <MediaLeft>
      <div>123</div>
    </MediaLeft>
  );
  expect(wrapper.contains(
    <figure className="media-left">
      <div>
        123
      </div>
    </figure>
  )).toBeTruthy();
});

test('should render Media', () => {
  const wrapper = shallow(
    <Media>
      <div>123</div>
    </Media>
  );
  expect(wrapper.contains(
    <article className="media">
      <div>
        123
      </div>
    </article>
  )).toBeTruthy();
});
