import { classFromSizeFullColors } from '../utils/modifiers.utils';
import { propTypesForInverted, propTypesForColors, propTypesForSizes } from '../utils/types.utils';

export const Button = props =>
  <a className={classFromSizeFullColors(props)({ button: true, 'is-loading': isLoading })} onClick={onClick}>
    {icon}
    <span>
      {label}
    </span>
  </a>

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  ...propTypesForInverted,
  ...propTypesForColors,
  ...propTypesForSizes
}
