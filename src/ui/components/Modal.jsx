import classnames from 'classnames';
import { Wrapp } from '../elements/Wrapp';

export const ModalCardHead = ({ children }) => Wrapp('modal-card-head', children);

export const ModalCardBody = ({ children }) => Wrapp('modal-card-body', children);

export const ModalCard = ({ children }) => Wrapp('modal-card', children);

export const ModalClose = () => <button className='modal-close'></button>;

export const ModalBackground = ({ children }) => Wrapp('modal-background', children);

export const ModalContent = ({ children }) => Wrapp('modal-content', children);

export const Modal = ({ children, isActive }) => Wrapp(classnames({ modal: true, 'is-active': isActive }), children);
