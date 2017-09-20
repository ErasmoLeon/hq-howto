import React from 'react';
import {shallow} from 'enzyme';
import { Section } from '../../src/layout/Section';

test('should render', () => {
  const wrapper = shallow(
    <Section>
      <div>123</div>
    </Section>
  );
  expect(wrapper.contains(
    <section className="section">
      <div>123</div>
    </section>
  )).toBeTruthy();
});
