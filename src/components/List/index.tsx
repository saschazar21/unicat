import React, { Component, ReactChild } from 'react';
import { style } from 'typestyle';
import generateId from '../../_lib/generateId';

export interface IListProps {
  /** A list consists of children, so the <List> tag should always act as wrapper */
  readonly children: ReactChild[];
  /** Render the list horizontally or vertically */
  readonly horizontal?: boolean;
  /** Whether to render a dash as list indicator */
  readonly indicator?: boolean;
}

export default class List extends Component<IListProps> {
  /**
   * The ID base string, will be used as prefix for the key="" attributes
   */
  private ID: string = '';

  /**
   * The ID factory, either returns the already randomly generated ID prefix, or creates a new one
   */
  get id(): string {
    if (this.ID.length < 1) {
      this.ID = generateId('list');
    }
    return this.ID;
  }

  /**
   * The CSS styles for the list
   */
  get list(): string {
    const { indicator, horizontal } = this.props;
    return style({
      $nest: {
        '& > li': {
          display: 'list-item',
          padding: '.5rem',
          width: horizontal ? 'auto' : '100%',
        },
        '& > li::before': {
          content: indicator && !horizontal ? `'-'` : ``,
          marginLeft: '-1.25rem',
          marginRight: '.75rem',
        },
      },
      alignItems: indicator && !horizontal ? 'flex-start' : 'center',
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      flexWrap: horizontal ? 'wrap' : 'nowrap',
      justifyContent: horizontal ? 'center' : 'flex-start',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      paddingLeft: indicator && !horizontal ? '.75rem' : 0,
    });
  }

  /**
   * The main render function
   */
  public render(): JSX.Element {
    const { children} = this.props;
    const childrenProps = Array.isArray(children) ? children : [ children ];

    return (
      <ul className={this.list}>
        {childrenProps.map((child: ReactChild, index: number) => (
          <li key={`${this.id}-${index}`}>{child}</li>
        ))}
      </ul>
    );
  }
}
