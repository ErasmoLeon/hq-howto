import { Wrapp, DOM } from '../elements/Wrapp';
import { classFromTiles } from '../utils/modifiers.utils';
import { propTypesForTiles, propTypeSingleChildren } from '../utils/modifiers.utils';

export const Tile = props => Wrapp(classFromTiles(props)({ tile: true }), props.children, DOM.SECTION);

Tile.propTypes = {
  ...propTypeSingleChildren,
  ...propTypesForTiles
}
