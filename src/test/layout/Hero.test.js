import React from 'react';
import {shallow} from 'enzyme';
import {Hero, HeroBody, HeroHead, HeroFoot} from '../../src/layout/Hero';

test('should render', () => {
  const wrapper = shallow(
    <Hero isSuccess isLarge>
      <HeroHead>
        <div>head</div>
      </HeroHead>
      <HeroBody>
        <div>body</div>
      </HeroBody>
      <HeroFoot>
        <div>foot</div>
      </HeroFoot>
    </Hero>
  );
  expect(wrapper.contains(
    <section className="hero is-success is-large">
      <HeroHead>
        <div>
          head
        </div>
      </HeroHead>
      <HeroBody>
        <div>
          body
        </div>
      </HeroBody>
      <HeroFoot>
        <div>
          foot
        </div>
      </HeroFoot>
    </section>
  )).toBeTruthy();
});
