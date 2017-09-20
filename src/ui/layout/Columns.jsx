import { Wrapp } from '../elements/Wrapp';
import { classFromResponsive } from '../utils/modifiers.utils';
import { propTypesForResposive, propTypesMultiChildren } from '../utils/types.utils';

export const Columns = ({ children }) => Wrapp('columns', children);

export const Column = props => Wrapp(classFromResponsive(props)({ column: true }), props.children);

Column.propTypes = {
  ...propTypesForResposive,
  ...propTypesMultiChildren
};
