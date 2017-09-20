import PropTypes from 'prop-types';
import { Wrapp } from '../elements/Wrapp';
import { classFromColors } from '../utils/modifiers.utils';
import { propTypesForColors, propTypesMultiChildren } from '../utils/types.utils';

export const Notification = props => Wrapp(classFromColors(props)({ notification: true }), props.children);

Notification.propTypes = {
  ...propTypesForColors,
  ...propTypesMultiChildren
}
