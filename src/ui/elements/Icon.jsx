import PropTypes from 'prop-types';
import { classFromSize } from '../utils/modifiers.utils';
import { propTypesForSizes } from '../utils/types.utils';

export const Icon = props =>
  <span className={classFromSize(props)({ icon: true })}>
    <i className={`fa fa-${props.name}`} />
  </span>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  ...propTypesForSizes
};
