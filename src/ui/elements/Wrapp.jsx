import React from 'react';
import { defaultTo } from 'ramda';
import { propTypesMultiChildren } from '../utils/types.utils';

export const DOM = {
  DIV: 'div',
  SPAN: 'span',
  A: 'a',
  ARTICLE: 'article',
  NAV: 'nav',
  HEADER: 'header',
  FOOTER: 'footer',
  FIGURE: 'figure',
  NAV: 'nav',
  SECTION: 'section',
  BUTTON: 'button',
  P: 'p'
}

var defaultComponent = defaultTo(DOM.DIV);

export const atom = (className, children, type) =>
  React.createElement(
    defaultComponent(type),
    { className },
    children
  );

export const Wrapp = atom

Wrapp.propTypes = propTypesMultiChildren;
