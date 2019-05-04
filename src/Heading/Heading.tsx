import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { fonts, fontSizes } from '../__styles__/fonts';
import { Heading as Tag, FontFamily } from '../__data__/definitions';

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
  color: inherit;
  font-family: ${fonts[FontFamily.Heading].name}, sans-serif;
  font-size: ${(props: HeadingProps) =>
    props.level < 6 ? fontSizes[props.level - 1] : fontSizes[Tag['h5']]};
  font-weight: ${fonts[FontFamily.Heading].weights.pop()};
  margin-top: 0;
`;
