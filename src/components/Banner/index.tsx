import { AlertIcon } from '@saschazar/unicat-icons';
import React, { Component, ReactElement } from 'react';
import { style } from 'typestyle';
import {
  alert,
  background,
  primary,
  special,
  success,
} from '../../_data/colors';
import IColor from '../../_models/colors/color';

export enum BannerType {
  alert,
  primary,
  special,
  success,
}

export interface IBannerProps {
  /** The children, rendered as body text */
  readonly children: string;
  /** The icon to display */
  readonly icon?: ReactElement<SVGElement>;
  /** The title, rendered as headline */
  readonly title?: string;
  /** The visual appearance of the banner (e.g. color) */
  readonly type?: BannerType;
}

export default class Banner extends Component<IBannerProps> {
  // tslint:disable-next-line:variable-name
  private _color: IColor;

  public get color(): IColor {
    return this._color;
  }

  get iconWrapper(): string {
    return style({
      $nest: {
        '> svg': {
          height: 'auto',
          width: '1em',
        },
      },
      alignSelf: 'stretch',
      backgroundColor: this.color.hex,
      fill: background.hex,
      maxWidth: '2em',
    });
  }

  get innerWrapper(): string {
    return style({
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1em',
    });
  }

  get title(): string {
    return style({
      display: 'block',
      fontSize: '1.25em',
      fontWeight: 'bold',
      marginBottom: '0.5em',
    });
  }

  get wrapper(): string {
    return style({
      alignItems: 'center',
      borderColor: this.color.hex,
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: '0.5px',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      padding: 0,
    });
  }
  constructor(props: IBannerProps) {
    super(props);

    switch (props.type) {
      case BannerType.alert:
        this._color = alert;
        break;
      case BannerType.special:
        this._color = special;
        break;
      case BannerType.success:
        this._color = success;
        break;
      case BannerType.primary:
      default:
        this._color = primary;
    }
  }
  public render(): JSX.Element {
    const { title, children } = this.props;
    const icon = this.props.icon || <AlertIcon />;
    return (
      <div className={this.wrapper}>
        <div className={[this.iconWrapper, this.innerWrapper].join(' ')}>
          {icon}
        </div>
        <div className={this.innerWrapper}>
          {title && <span className={this.title}>{title}</span>}
          <span>{children}</span>
        </div>
      </div>
    );
  }
}
