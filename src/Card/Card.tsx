import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { Spacing, Variant } from '../__data__/definitions';
import { borderRadius } from '../__styles__/borders';
import { shadows, shadowString } from '../__styles__/shadows';
import { spacings } from '../__styles__/sizes';

export interface CardProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  level?: Spacing;
  spacing?: Spacing;
}

class Card extends Component<CardProps> {
  static defaultProps = {
    level: Spacing.XS,
    spacing: Spacing.XL,
  };

  public render() {
    const { children, className } = this.props;

    return <aside className={className}>{children}</aside>;
  }
}

export default styled(Card)<CardProps>`
  position: relative;
  border-radius: ${borderRadius[Variant.Default]};
  box-shadow: ${({ level = Spacing.XS }) => shadowString(shadows[level])};
  padding: ${({ spacing = Spacing.XL }) => spacings[spacing]};
  overflow: hidden;
`;
