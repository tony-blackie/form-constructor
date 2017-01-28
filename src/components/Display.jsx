import React, { Component } from 'react';

import Info from './Info.jsx';
import Form from './Form.jsx';

export default class Display extends Component {

    render() {

        return (
            <div className="display">
                <Info formElements={this.props.formElements} />
                <Form
                    hidden={this.props.formElements.length === 0}
                    formElements={this.props.formElements}
                />
            </div>
        );
    }
}