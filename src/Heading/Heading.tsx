import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { fonts, fontSizes } from '../__styles__/fonts';
import { mediaQueryString, spacings } from '../__styles__/sizes';
import {
  Heading as Tag,
  FontFamily,
  Resolution,
  Spacing,
} from '../__data__/definitions';

export interface HeadingProps {
  children: ReactNode[] | string;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
  SEO?: boolean;
}

class Element extends Component<HeadingProps> {
  static defaultProps = {
    className: null,
    SEO: true,
  };

  public render() {
    const { children, className, level, SEO } = this.props;
    const hLevel = level < 6 ? `h${level}` : 'h5';

    return React.createElement(SEO ? hLevel : 'span', { className }, children);
  }
}

export default styled(Element)<HeadingProps>`
  display: block;
  font-family: var(--font-heading);
  font-size: ${(props: HeadingProps) =>
    props.level < 5 ? fontSizes[props.level] : fontSizes[Tag['h5']]};
  font-weight: ${fonts[FontFamily.Heading].weights.pop()};
  margin-top: 0;
  margin-bottom: ${spacings[Spacing.XS]};

  ${mediaQueryString(Resolution.Desktop)} {
    font-size: ${(props: HeadingProps) =>
      props.level < 6 ? fontSizes[props.level - 1] : fontSizes[Tag['h5']]};
  }
`;
