import * as React from 'react';
import { Component, HTMLAttributes } from 'react';

import './Button.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

export default class Button extends Component<ButtonProps, {}> {
  render() {
    const { className, children } = this.props;
    return <button
      {...this.props}
      className={`button ${className}`}
    >
      {children}
    </button>;
  }
}
