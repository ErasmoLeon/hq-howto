import { Wrapp, DOM } from '../elements/Wrapp';

export const LevelItem = ({ children }) => Wrapp('level-item', children);

export const LevelLeft = ({ children }) => Wrapp('level-left', children);

export const LevelRight = ({ children }) => Wrapp('level-right', children);

export const Level = ({ children }) => Wrapp('level', children, DOM.NAV);
