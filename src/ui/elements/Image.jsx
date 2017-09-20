import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Image = ({ src, size, isSquare, ratio }) => {
  const className = classnames({
    image: true,
    'is-square': isSquare,
    [`is-${size}x${size}`]: size,
    [ratio ? `is-${ratio[0]}by${ratio[1]}` : '']: ratio
  });
  return (
    <figure className={className}>
      <img src={src} />
    </figure>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  isSquare: PropTypes.bool,
  ratio: PropTypes.arrayOf(PropTypes.number)
};
