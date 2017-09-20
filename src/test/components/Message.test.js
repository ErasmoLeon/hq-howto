import React from 'react';
import {shallow} from 'enzyme';

import {
  Message,
  MessageHeader,
  MessageBody
} from '../../src/components/Message';

test('should render MessageHeader', () => {
  const wrapper = shallow(
    <MessageHeader>
      <div>123</div>
    </MessageHeader>
  );
  expect(wrapper.contains(
    <div className="message-header">
      <div>
        123
      </div>
    </div>
  )).toBeTruthy();
});

test('should render MessageBody', () => {
  const wrapper = shallow(
    <MessageBody>
      <div>123</div>
    </MessageBody>
  );
  expect(wrapper.contains(
    <div className="message-body">
      <div>
        123
      </div>
    </div>
  )).toBeTruthy();
});

test('should render Message', () => {
  const wrapper = shallow(
    <Message>
      <div>123</div>
    </Message>
  );
  expect(wrapper.contains(
    <article className="message">
      <div>
        123
      </div>
    </article>
  )).toBeTruthy();
});
