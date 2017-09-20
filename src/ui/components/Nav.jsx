import classnames from 'classnames';
import { Wrapp, DOM } from '../elements/Wrapp';

export const NavItem = ({ children }) => Wrapp('navbar-item', children, DOM.A);

export const NavBrand = ({ children }) => Wrapp('navbar-brand', children);

export const Nav = ({ children }) => Wrapp('navbar', children, DOM.NAV);

export const NavBurger = ({ children }) => Wrapp(classnames({ 'button': true, 'navbar-burger': true }), children, DOM.BUTTON);
