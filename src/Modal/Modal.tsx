import React, { Component, ReactNode, createRef, ReactElement } from 'react';
import classnames from 'classnames';

import { preventDefault } from '../__tools__/helpers';
import { SmallVariant } from '../__types__/global';
import Button from '../Button';
import Card from '../Card';

import styles from './Modal.scss';

export interface ModalProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  cta?: ReactElement<Button>;
  heading?: ReactNode;
  onClose: (event?: React.SyntheticEvent) => void;
  variant?: SmallVariant;
}

export interface ModalState {
  overflow: string | null;
}

export default class Modal extends Component<ModalProps, ModalState> {
  static closingKeys = ['Backspace', 'Escape'];

  static defaultProps = {
    variant: 'default',
  };

  state = {
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
        overflow: document.body.style.overflow,
      });
      document.body.style.overflow = 'hidden';

      if (this.containerRef && this.containerRef.current) {
        this.containerRef.current.focus();
      }
    }
  }

  public componentWillUnmount(): void {
    const { overflow } = this.state;

    if (typeof document === 'object' && typeof document.body !== 'undefined') {
      document.body.style.overflow = overflow;
    }
  }

  public render() {
    const { variant: defaultVariant } = Modal.defaultProps;

    const {
      children,
      className: customClassName,
      variant = defaultVariant,
      ...otherProps
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
        <Card
          className={className}
          variant={variant as SmallVariant}
          {...otherProps}
        >
          {children}
        </Card>
      </div>
    );
  }
}
