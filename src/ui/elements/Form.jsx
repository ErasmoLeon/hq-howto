import PropTypes from 'prop-types';
import { classFromSizeColors, classFromColors } from '../utils/modifiers.utils';
import { propTypesForColors, propTypesMultiChildren } from '../utils/types.utils';

export const Option = ({ value, label }) => <option value={value}>{label}</option>;

export const Select = props =>
  <select
    value={props.value}
    className={classFromSizeColors(props)({ select: true })}
    onBlur={props.onBlur}
    onChange={props.onChange}
  >
    {props.source.map((option, key) =>
      <Option
        key={key}
        value={option[props.idKey]}
        label={option[props.labelKey]}
      />
    )}
  </select>

Select.propTypes = {
  selected: PropTypes.any,
  labelKey: PropTypes.string.isRequired,
  idKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export const Input = props =>
  <input
    className={classFromSizeColors(props)({ input: true })}
    onBlur={props.onBlur}
    onChange={props.onChange}
    type={props.type}
    placeholder={props.placeholder}
  />;

export const FieldHelp = (props) =>
  <p className={classFromColors(props)({ help: true })}>
    {props.text}
  </p>

FieldHelp.propTypes = {
  text: PropTypes.string.isRequired,
  ...propTypesForColors
};

export const FieldControls = ({ children, iconLeft, iconRight }) =>
  <p className={classnames({ control: true, 'has-icons-left': iconLeft, 'has-icons-right': iconRight })}>
    {children}
  </p>

FieldControls.propTypes = {
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  ...propTypesMultiChildren
};

export const Field = ({ children, label }) =>
  <div className={classnames({ field: true })}>
    <label>{label}</label>
    {children}
  </div>

Field.propTypes = {
  label: PropTypes.string.isRequired,
  ...propTypesMultiChildren
};
