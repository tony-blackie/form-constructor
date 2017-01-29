import React, { Component } from 'react';

import FormTemplate from './FormTemplate.jsx';
import FormConstructor from './FormConstructor.jsx';
import FormConfig from './FormConfig.jsx';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleJSONSubmit = this.handleJSONSubmit.bind(this);
    }

    handleSubmit(formElement) {
        this.props.handleSubmit(formElement);
    }

    handleJSONSubmit(json) {
        this.props.handleJSONSubmit(json);
    }

    render() {
        return (
            <div className="control-panel">
                <FormTemplate />
                <FormConstructor handleSubmit={this.handleSubmit} />
                <FormConfig handleJSONSubmit={this.handleJSONSubmit} isJSONInvalid={this.props.isJSONInvalid} />
            </div>
        );
    }
}