import React, {Props} from 'react';

interface CheckboxProps extends Props<Checkbox> {
    defaultChecked: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps> {
    render() {
        const {defaultChecked} = this.props;
        return (
            <div className="react_checkbox">
                <input type="checkbox" defaultChecked={defaultChecked} /*onChange={this.handleChange}*//>
            </div>
        );
    }
}