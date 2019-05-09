import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { Spacing, Variant } from '../__data__/definitions';
import { borderRadius, borderWidths } from '../__styles__/borders';
import { colors } from '../__styles__/colors';
import { shadows, shadowString } from '../__styles__/shadows';
import { spacings } from '../__styles__/sizes';

export interface CardProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  level?: Spacing;
  spacing?: Spacing;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

class Card extends Component<CardProps> {
  static defaultProps = {
    level: Spacing.XS,
    spacing: Spacing.M,
    variant: 'default',
  };

  public render() {
    const { children, className } = this.props;

    return <aside className={className}>{children}</aside>;
  }
}

export default styled(Card)<CardProps>`
  border-color: ${({ variant = 'default' }) => {
    switch (variant) {
      case 'primary':
        return colors[Variant.Primary].hex;
      case 'success':
        return colors[Variant.Success].hex;
      case 'warning':
        return colors[Variant.Warning].hex;
      default:
        return 'transparent';
    }
  }}
  border-radius: ${borderRadius[Variant.Default]};
  border-style: solid;
  border-width: ${borderWidths[1]}
  box-shadow: ${({ level = Spacing.XS }) => shadowString(shadows[level])};
  padding: ${({ spacing = Spacing.M }) => spacings[spacing]};
`;
