import { Wrapp, DOM } from '../elements/Wrapp';
import { classFromColors } from '../utils/modifiers.utils';
import { propTypesMultiChildren, propTypesForColors } from '../utils/types.utils';

export const Message = (props) => Wrapp(classFromColors(props)({ message: true }), props.children, DOM.ARTICLE)

Message.propTypes = {
  ...propTypesMultiChildren,
  ...propTypesForColors
}

export const MessageHeader = ({ children }) => Wrapp('message-header', children);

export const MessageBody = ({ children }) => Wrapp('message-body', children);
