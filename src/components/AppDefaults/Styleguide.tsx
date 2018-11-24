import React, { Component } from 'react';
import { colorScheme } from '../../_data/colors';
import IColor from '../../_models/colors/color';
import Bean from '../Bean';
import './Styleguide.scss';

export default class Styleguide extends Component {
  public render() {
    return (
      <div className="color-beans">
        {colorScheme.map((color: IColor) => (
          <Bean
            key={color.name}
            name={color.name}
            hex={color.hex}
            column={true}
          />
        ))}
      </div>
    );
  }
}
