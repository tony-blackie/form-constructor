import React, { Component } from 'react';

import Info from './Info.jsx';
import Form from './Form.jsx';

export default class Display extends Component {

    constructor(props) {
        super(props);

        this.createForm = this.createForm.bind(this);
    }

    createForm() {
        this.props.createForm();
    }

    render() {

        return (
            <div className="display">
                <Info
                    formElements={this.props.nextState}
                    createForm={this.createForm}
                />
                <Form
                    hidden={this.props.formElements.length === 0}
                    formElements={this.props.formElements}
                />
            </div>
        );
    }
}

Display.propTypes = {
    formElements: React.PropTypes.array,
    nextState: React.PropTypes.array,
    createForm: React.PropTypes.func
};