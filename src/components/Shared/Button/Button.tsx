import * as React from 'react';
import { Component, HTMLAttributes } from 'react';
<<<<<<< HEAD

=======
>>>>>>> d3b27784f678fac9aeee558d2f3756a51b6aed60
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
