import React from 'react';
import { shallow } from 'enzyme';
import { Input, Select } from '../../src/elements/Form';

test('should render select', () => {
  const source = [
    {
      id: 1,
      name : 'foo'
    },
    {
      id: 2,
      name : 'bar'
    },
  ];
  const wrapper = shallow(
    <Select onChange={x=>x} value={2} source={source} labelKey='name' idKey='id' isPrimary isLarge />
  );
  expect(wrapper.html()).toEqual('<select class="select is-primary is-large"><option value="1">foo</option><option selected="" value="2">bar</option></select>');
});

test('should render input', () => {
  const wrapper = shallow(
    <Input type='text' isPrimary isLarge />
  );
  expect(
    wrapper.contains(
       <input
         className="input is-primary is-large"
         onBlur={undefined}
         onChange={undefined}
         type="text"
         placeholder={undefined}
       />
    )
  ).toBeTruthy();
});
