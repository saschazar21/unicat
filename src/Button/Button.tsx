import React, { Component } from 'react';
import styled from 'styled-components';

import { Variant, Spacing } from '../__data__/definitions';
import { borderRadius } from '../__styles__/borders';
import { colors } from '../__styles__/colors';
import { spacings } from '../__styles__/sizes';

export interface ButtonProps {
  block?: boolean;
  className?: string;
  icon?: SVGSVGElement;
  onClick?: any;
  title: string;
  size?: Spacing;
  type?: 'submit' | 'reset';
  variant?: Variant;
}

class Button extends Component<ButtonProps> {
  static defaultProps = {
    block: false,
    variant: Variant.Primary,
    size: Spacing.M,
    type: 'submit',
  };

  public render() {
    const { className, icon, onClick, title, type } = this.props;

    return (
      <button className={className} onClick={onClick} type={type}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    );
  }
}

export default styled(Button)<ButtonProps>`
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border: none;
  border-radius: ${borderRadius[0]}
  padding: ${({ size = Spacing.M }) =>
    `${spacings[size]} ${spacings[size > 0 ? size - 1 : size]}`};
  max-width: 100%;
  background-color: ${({ variant = Variant.Primary }) => colors[variant].hex};
  color: ${({ variant = Variant.Primary }) => colors[variant].complimentary};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  
  > span {
    margin-right: ${spacings[Spacing.M]};
  }
`;
