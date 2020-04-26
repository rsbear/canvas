import styled from "styled-components";

import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  background,
  BackgroundProps,
  bottom,
  BottomProps,
  color as colorStyles,
  ColorStyleProps,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  order,
  OrderProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  style,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from "styled-system";

const flexGrow = style({
  prop: "flexGrow",
});

export interface FlexProps
  extends AlignItemsProps,
    AlignContentProps,
    BackgroundProps,
    BottomProps,
    ColorStyleProps,
    FlexBasisProps,
    FlexDirectionProps,
    FlexWrapProps,
    HeightProps,
    JustifyContentProps,
    MinHeightProps,
    MinWidthProps,
    MaxHeightProps,
    MaxWidthProps,
    OrderProps,
    PositionProps,
    SpaceProps,
    WidthProps,
    ZIndexProps {
  flexGrow?: number | string;
  bg?: string;
  backgroundColor?: string;
  color?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${alignContent};
  ${alignItems};
  ${background};
  ${bottom};
  ${colorStyles};
  ${flexBasis};
  ${flexDirection};
  ${flexGrow};
  ${flexWrap};
  ${height};
  ${justifyContent};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${order};
  ${position};
  ${space};
  ${width};
  ${zIndex};
`;
