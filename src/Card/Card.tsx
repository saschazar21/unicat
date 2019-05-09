import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { Spacing } from '../__data__/definitions';
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
    spacing: Spacing.M,
  };

  public render() {
    const { children, className } = this.props;

    return <div className={className}>{children}</div>;
  }
}

export default styled(Card)<CardProps>`
  box-shadow: ${({ level = Spacing.XS }) => shadowString(shadows[level])};
  padding: ${({ spacing = Spacing.M }) => spacings[spacing]};
`;
