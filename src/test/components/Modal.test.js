import React from 'react';
import {shallow} from 'enzyme';

import {
  ModalCardHead,
  ModalCardBody,
  ModalCard,
  ModalClose,
  ModalBackground,
  ModalContent,
  Modal
} from '../../src/components/Modal';

test('should render ModalCardHead', () => {
  const wrapper = shallow(
    <ModalCardHead>
      <div>foo</div>
    </ModalCardHead>
  );
  expect(wrapper.contains(
    <div className="modal-card-head">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render ModalCardBody', () => {
  const wrapper = shallow(
    <ModalCardBody>
      <div>foo</div>
    </ModalCardBody>
  );
  expect(wrapper.contains(
    <div className="modal-card-body">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render ModalCard', () => {
  const wrapper = shallow(
    <ModalCard>
      <div>foo</div>
    </ModalCard>
  );
  expect(wrapper.contains(
    <div className="modal-card">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render ModalClose', () => {
  const wrapper = shallow(
    <ModalClose>
      <div>foo</div>
    </ModalClose>
  );
  expect(wrapper.contains(
     <button className="modal-close" />
  )).toBeTruthy();
});

test('should render ModalBackground', () => {
  const wrapper = shallow(
    <ModalBackground>
      <div>foo</div>
    </ModalBackground>
  );
  expect(wrapper.contains(
    <div className="modal-background">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render ModalContent', () => {
  const wrapper = shallow(
    <ModalContent>
      <div>foo</div>
    </ModalContent>
  );
  expect(wrapper.contains(
    <div className="modal-content">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});

test('should render Modal', () => {
  const wrapper = shallow(
    <Modal>
      <div>foo</div>
    </Modal>
  );
  expect(wrapper.contains(
    <div className="modal">
      <div>
        foo
      </div>
    </div>
  )).toBeTruthy();
});
