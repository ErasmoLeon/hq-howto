import { Wrapp, DOM } from '../elements/Wrapp';

export const Media = ({ children }) => Wrapp('media', children, DOM.ARTICLE);

export const MediaLeft = ({ children }) => Wrapp('media-left', children, DOM.FIGURE);

export const MediaContent = ({ children }) => Wrapp('media-content', children, DOM.ARTICLE);
