import { compose, assoc, not, isNil } from 'ramda';
import classnames from 'classnames';

const exists = compose(not, isNil);

const assocIfExists = (a, b) => assoc(a, exists(b))

const widthModifier = width => assocIfExists(`is-${width}`, width)

export const classFromResponsive = props => compose(
  classnames,
  composeResponsiveModifiers(props)
);

export const classFromColors = props => compose(
  classnames,
  composeColorsModifiers(props)
);

export const classFromSize = props => compose(
  classnames,
  composeSizeModifiers(props)
);

export const classFromSizeFullColors = props => compose(
  classnames,
  composeSizeModifiers(props),
  composeColorsModifiers(props),
);

export const classFromSizeColors = props => compose(
  classnames,
  composeSizeModifiers(props),
  composeColorsModifiers(props),
  composeInvertedModifiers(props),
);

export const classFromTiles = ({ isAncestor, isParent, isChild, isVertical, width }) =>
  compose(
    assocIfExists('is-ancestor', isAncestor),
    assocIfExists('is-parent', isParent),
    assocIfExists('is-child', isChild),
    assocIfExists('is-vertical', isVertical),
    widthModifier(width)
  );

export const composeResponsiveModifiers = p =>
  compose(
    assocIfExists('is-desktop', p.isDesktop),
    assocIfExists('is-mobile', p.isMobile),
    assocIfExists('is-tablet', p.isTablet),
    assocIfExists('is-three-quarters', p.isThreeQuarters),
    assocIfExists('is-two-thirds', p.isTwoThirds),
    assocIfExists('is-half', p.isHalf),
    assocIfExists('is-one-third', p.isOneThird),
    assocIfExists('is-one-quarter', p.isOneQuarter),
    assocIfExists('is-three-quarters-mobile', p.isThreeQuartersMobile),
    assocIfExists('is-two-thirds-mobile', p.isTwoThirdsMobile),
    assocIfExists('is-half-mobile', p.isHalfMobile),
    assocIfExists('is-one-third-mobile', p.isOneThirdMobile),
    assocIfExists('is-three-quarters-tablet', p.isThreeQuartersTablet),
    assocIfExists('is-one-quarter-mobile', p.isOneQuarterMobile),
    assocIfExists('is-two-thirds-tablet', p.isTwoThirdsTablet),
    assocIfExists('is-half-tablet', p.isHalfTablet),
    assocIfExists('is-one-third-tablet', p.isOneThirdTablet),
    assocIfExists('is-one-quarter-tablet', p.isOneQuarterTablet),
    assocIfExists('is-gapless', p.isGapless),
    assocIfExists('is-multiline', p.isMultiline),
    assocIfExists('is-narrow', p.isNarrow),
    assocIfExists('is-narrow-mobile', p.isNarrowMobile),
    assocIfExists('is-narrow-tablet', p.isNarrowTablet),
    assocIfExists('is-narrow-desktop', p.isNarrowDesketop),
    assocIfExists(`is-offset-${p.offset}`, p.offset),
    widthModifier(p.width)
  );

export const composeInvertedModifiers = ({ isInverted, isOutlined }) =>
  compose(
    assocIfExists('is-inverted', isInverted),
    assocIfExists('is-outlined', isOutlined),
  );

export const composeSizeModifiers = ({ isSmall, isLarge, isMedium, isFullHeight }) =>
  compose(
    assocIfExists('is-small', isSmall),
    assocIfExists('is-large', isLarge),
    assocIfExists('is-medium', isMedium),
    assocIfExists('is-fullheight', isFullHeight)
  );

export const composeColorsModifiers = ({ isWhite, isLink, isPrimary, isSuccess, isInfo, isWarning, isDanger, isLight, isDark }) =>
  compose(
    assocIfExists('is-primary', isPrimary),
    assocIfExists('is-success', isSuccess),
    assocIfExists('is-info', isInfo),
    assocIfExists('is-warning', isWarning),
    assocIfExists('is-danger', isDanger),
    assocIfExists('is-light', isLight),
    assocIfExists('is-dark', isDark),
    assocIfExists('is-white', isWhite),
    assocIfExists('is-link', isLink)
  );
