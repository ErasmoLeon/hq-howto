import { Wrapp, DOM } from '../elements/Wrapp';

export const CardFooterItem = ({ children }) => Wrapp('card-footer-item', children, DOM.P);

export const CardFooter = ({ children }) => Wrapp('card-footer', children, DOM.FOOTER);

export const CardHeaderTitle = ({ children }) => Wrapp('card-header-title', children);

export const CardHeaderIcon = ({ children }) => Wrapp('card-header-icon', children);

export const CardHeader = ({ children }) => Wrapp('card-header', children, DOM.HEADER);

export const CardImage = ({ children }) => Wrapp('card-image', children);

export const CardContent = ({ children }) => Wrapp('card-content', children);

export const Card = ({ children }) => Wrapp('card', children);
