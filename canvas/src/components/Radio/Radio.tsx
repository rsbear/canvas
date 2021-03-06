import React from "react";
import { Icon } from "../Icon";
import { Sans } from "../Sans";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export interface RadioContainerProps extends SpaceProps {
  activeColor?: string;
  className?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}

export interface RadioProps extends RadioContainerProps {
  active?: boolean;
  textColor?: string;
  fontSize?: number | string;
  fontWeight?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  spacing?: string;
  label?: string;
}

const RadioContainer = styled.div<RadioContainerProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${space};
  svg {
    stroke: ${(p) => (p.color ? p.color : "rgba(20,20,20,.6)")};
    transition: all 180ms ease-in-out;
    cursor: pointer;

    &:hover {
      stroke: ${(p) => (p.activeColor ? p.activeColor : "rgba(20,20,20,1)")};
    }
  }
  & .active svg {
    stroke: ${(p) => (p.activeColor ? p.activeColor : "rgba(20,20,20,1)")};
  }

  ${(props) =>
    props.disabled &&
    `
  cursor: not-allowed;
  color: rgba(20,20,20,.4);

  svg {
    stroke: rgba(20,20,20,.4);
    transition: all 180ms ease-in-out;
    cursor: not-allowed;
  `}
`;

export const Radio: React.FC<RadioProps> = (props) => {
  // other props are shit like spacing and activeColor
  const {
    active,
    disabled,
    className,
    textColor,
    fontSize,
    fontWeight,
    onClick,
    spacing,
    size,
    label,
    ...otherProps
  } = props;

  return (
    <RadioContainer
      className={active ? "active" : className}
      onClick={!disabled ? onClick : () => {}}
      disabled={disabled}
      {...otherProps}
    >
      <Icon
        icon={!active ? "circle" : "check-circle"}
        size={!size ? 18 : size}
        mr={!spacing ? "10px" : spacing}
      />
      <Sans fontSize={fontSize} fontWeight={fontWeight} color={textColor}>
        {label}
      </Sans>
    </RadioContainer>
  );
};
