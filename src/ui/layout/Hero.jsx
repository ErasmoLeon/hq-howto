import { Wrapp, DOM } from '../elements/Wrapp';
import { classFromSizeColors } from '../utils/modifiers.utils';
import { propTypesMultiChildren, propTypesForSizes, propTypesForColors } from '../utils/types.utils';

export const HeroBody = ({ children }) => Wrapp('hero-body', children);

export const Hero = props => Wrapp(classFromSizeColors(props)({ hero: true }), props.children, DOM.SECTION);

Hero.propTypes = {
  ...propTypesMultiChildren,
  ...propTypesForSizes,
  ...propTypesForColors
}
