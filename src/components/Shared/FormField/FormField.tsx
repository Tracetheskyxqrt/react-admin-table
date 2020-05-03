import * as React from 'react';
import { Component, Props } from 'react';
import './FormField.scss';

interface FormFieldProps extends Props<FormField> {
    label?: string;
}

export default class FormField extends Component<FormFieldProps, {}> {
    render() {
        const {label, children} = this.props;
        return <div className='form-field'>
            {label && <div className='form-label'>
                {label}
            </div>}
            <div className='field'>
                {children}
            </div>
        </div>;
    }
}
