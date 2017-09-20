import PropTypes from 'prop-types';

export const propTypesMultiChildren = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export const propTypeSingleChildren = {
  children: PropTypes.element.isRequired,
}

export const propTypesForWidth = {
  width: PropTypes.number
}

export const propTypesForTiles = {
  isAncestor: PropTypes.bool,
  isParent: PropTypes.bool,
  isChild: PropTypes.bool,
  isVertical: PropTypes.bool,
  ...propTypesForWidth
}

export const propTypesForResposive = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  isThreeQuarters: PropTypes.bool,
  isTwoThirds: PropTypes.bool,
  isHalf: PropTypes.bool,
  isOneThird: PropTypes.bool,
  isOneQuarter: PropTypes.bool,
  isThreeQuartersMobile: PropTypes.bool,
  isTwoThirdsMobile: PropTypes.bool,
  isHalfMobile: PropTypes.bool,
  isOneThirdMobile: PropTypes.bool,
  isThreeQuartersTablet: PropTypes.bool,
  isOneQuarterMobile: PropTypes.bool,
  isTwoThirdsTablet: PropTypes.bool,
  isHalfTablet: PropTypes.bool,
  isOneThirdTablet: PropTypes.bool,
  isOneQuarterTablet: PropTypes.bool,
  isGapless: PropTypes.bool,
  isMultiline: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isNarrowMobile: PropTypes.bool,
  isNarrowTablet: PropTypes.bool,
  isNarrowDesketop: PropTypes.bool,
  offset: PropTypes.number,
  ...propTypesForWidth
}

export const propTypesForSizes = {
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isMedium: PropTypes.bool,
  isFullHeight: PropTypes.bool,
}

export const propTypesForColors = {
  isPrimary: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isInfo: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isLight: PropTypes.bool,
  isDark: PropTypes.bool,
  isWhite: PropTypes.bool,
  isLink: PropTypes.bool,
}

export const propTypesForInverted = {
  'isInverted': PropTypes.bool,
  'isOutlined': PropTypes.bool,
}
