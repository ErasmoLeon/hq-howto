import React from 'react';
import { shallow } from 'enzyme';

import {
  CardFooterItem,
  CardFooter,
  CardHeaderTitle,
  CardHeaderIcon,
  CardHeader,
  CardImage,
  CardContent,
  Card
} from '../../src/components/Card';

test('should render CardFooterItem', () => {
  const wrapper = shallow(
    <CardFooterItem><div>foo</div></CardFooterItem>
  );
  expect(wrapper.contains(
    <a className="card-footer-item">
      <div>
        foo
      </div>
    </a>
  )).toBeTruthy();
});

test('should render CardHeaderTitle', () => {
  const wrapper = shallow(
    <CardHeaderTitle><div>foo</div></CardHeaderTitle>
  );
  expect(wrapper.contains(
    <div className="card-header-title">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render CardHeaderIcon', () => {
  const wrapper = shallow(
    <CardHeaderIcon><div>foo</div></CardHeaderIcon>
  );
  expect(wrapper.contains(
    <div className="card-header-icon">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render CardHeader', () => {
  const wrapper = shallow(
    <CardHeader><div>foo</div></CardHeader>
  );
  expect(wrapper.contains(
    <header className="card-header">
      <div>
        foo
      </div>
    </header>
  )).toBeTruthy();
});

test('should render CardImage', () => {
  const wrapper = shallow(
    <CardImage><div>foo</div></CardImage>
  );
  expect(wrapper.contains(
    <div className="card-image">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render CardContent', () => {
  const wrapper = shallow(
    <CardContent><div>foo</div></CardContent>
  );
  expect(wrapper.contains(
    <div className="card-content">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render Card', () => {
  const wrapper = shallow(
    <Card><div>foo</div></Card>
  );
  expect(wrapper.contains(
    <div className="card">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});
