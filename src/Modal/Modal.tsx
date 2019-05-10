import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

export interface ModalProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  onClose: (event: MouseEvent) => void;
  variant?: 'default' | 'light';
}

class Modal extends Component<ModalProps> {
  static defaultProps = {
    variant: 'default',
  };

  public render() {
    // Insert template logic here
    return null;
  }
}

export default styled(Modal)<ModalProps>``;
