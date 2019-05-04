import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import KeyGenerator from '../__tools__/key-generator';
import { Spacing, Variant } from '../__data__/definitions';
import { borderColor, borderRadius, borderWidths } from '../__styles__/borders';
import { colors } from '../__styles__/colors';
import { spacings } from '../__styles__/sizes';

export interface TableProps {
  className?: string;
  data: [{ key: ReactNode | string; set: (ReactNode | string)[] }];
  caption?: ReactNode | string;
  zebra?: boolean;
}

class Table extends Component<TableProps> {
  static defaultProps = {};

  private _key = new KeyGenerator('table-key');
  private _datakey = new KeyGenerator('table-data');
  private _datarow = new KeyGenerator('table-row');

  public render() {
    const { className, data, caption } = this.props;

    const headings: ReactNode[] = [];
    const tableData: ReactNode[][] = [];

    let index = 0;
    let length = 0;

    data.forEach(({ key, set }, i) => {
      headings.push(<th key={`${this._key.next()}-${key}`}>{key}</th>);
      if (length < set.length) {
        index = i;
        length = set.length;
      }
    });

    data[index].set.forEach((_d, i) => {
      tableData.push(
        data.map(({ set }) => <td key={this._datakey.next()}>{set[i]}</td>)
      );
    });

    return (
      <div className={className}>
        <table>
          <thead>
            <tr>{headings}</tr>
          </thead>
          <tbody>
            {tableData.map(row => (
              <tr key={this._datarow.next()}>{row}</tr>
            ))}
          </tbody>
          {caption && <caption>{caption}</caption>}
        </table>
      </div>
    );
  }
}

export default styled(Table)<TableProps>`
  border-radius: ${borderRadius[0]};
  overflow: hidden;

  table {
    display: table;
    background-color: white;
    border-collapse: collapse;
    border-color: ${borderColor};
    border-style: solid;
    border-width: ${borderWidths[0]};
    width: 100%;
  }

  thead {
    background-color: ${borderColor};
    text-align: left;
  }

  tr {
    transition: background-color 0.2s ease-in;

    ${({ zebra }) =>
      zebra &&
      `
    &:nth-child(2n) {
      background-color: ${colors[Variant.Light].hex};
    }
    `}

    &:hover {
      background-color: ${borderColor};
    }
  }

  th,
  td {
    padding: ${spacings[Spacing.XS]} ${spacings[Spacing.S]};
    text-align: left;
  }
`;
