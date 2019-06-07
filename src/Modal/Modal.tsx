import React, { Component, ReactNode, createRef } from 'react';
import classnames from 'classnames';

import { preventDefault } from '../__tools__/helpers';
import { SmallVariant } from '../__types__/global';
import Card from '../Card';

import styles from './Modal.scss';

export interface ModalProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  heading?: ReactNode;
  onClose: (event?: React.SyntheticEvent) => void;
  variant?: SmallVariant;
}

export interface ModalState {
  height: string | null;
  overflow: string | null;
}

export default class Modal extends Component<ModalProps, ModalState> {
  static closingKeys = ['Backspace', 'Escape'];

  static defaultProps = {
    variant: 'default',
  };

  state = {
    height: '',
    overflow: '',
  };

  private containerRef: React.RefObject<HTMLDivElement> = createRef();

  private handleClick = (e: React.MouseEvent): void => {
    preventDefault(e);
    const { onClose } = this.props;

    onClose(e);
  };

  private handleKeyUp = (e: React.KeyboardEvent): void => {
    preventDefault(e);
    const { onClose } = this.props;

    if (e.key && Modal.closingKeys.indexOf(e.key) > -1) {
      onClose(e);
    }
  };

  public componentDidMount(): void {
    if (typeof document === 'object' && typeof document.body !== 'undefined') {
      this.setState({
        height: document.body.style.height,
        overflow: document.body.style.overflow,
      });
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';

      if (this.containerRef && this.containerRef.current) {
        this.containerRef.current.focus();
      }
    }
  }

  public componentWillUnmount(): void {
    const { height, overflow } = this.state;

    if (typeof document === 'object' && typeof document.body !== 'undefined') {
      document.body.style.height = height;
      document.body.style.overflow = overflow;
    }
  }

  public render() {
    const { variant: defaultVariant } = Modal.defaultProps;

    const {
      children,
      className: customClassName,
      variant = defaultVariant,
    } = this.props;

    const className = classnames(styles.wrapper, customClassName);

    // Insert template logic here
    return (
      <div
        className={styles.container}
        onKeyUp={this.handleKeyUp}
        tabIndex={0}
        ref={this.containerRef}
      >
        <div className={styles.backdrop} onClick={this.handleClick} />
        <Card className={className} variant={variant as SmallVariant}>
          {children}
        </Card>
      </div>
    );
  }
}
