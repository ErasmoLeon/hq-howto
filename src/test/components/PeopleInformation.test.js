import React from 'react';
import { shallow } from 'enzyme';

import GridInformation from '../../ui/components/GridInformation';

test('Should to render people information with Hero with title, Nav with 2 children', () => {
  const props = {
    containerClass: 'people-information-container',
    navbarClass: 'people-information-navbar',
    title: 'Información de personas',
    navItems: ['Desaparecidas', 'Rescatadas'],
    columns: [{
      key: 'id',
      name: 'ID',
      width: 80,
      filterable: true
    }, {
      key: 'name',
      name: 'Name',
      width: 120,
      filterable: true
    }],
    rows: []
  };

  const wrapper = shallow(< GridInformation { ...props } />);
  expect(wrapper.find('.' + props.containerClass).exists()).toBeTruthy();
  expect(wrapper.find('.grid-info-subtitle').text()).toEqual(props.title);
  expect(wrapper.find('.' + props.navbarClass).exists()).toBeTruthy();
  expect(wrapper.find('.grid-info-nav-item').length).toEqual(props.navItems.length)
  expect(wrapper.find('.grid-info-table-component').exists()).toBeTruthy();
});