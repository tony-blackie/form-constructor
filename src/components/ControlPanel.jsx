import React, { Component } from 'react';

import FormTemplate from './FormTemplate.jsx';
import FormConstructor from './FormConstructor.jsx';
import FormConfig from './FormConfig.jsx';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleJSONSubmit = this.handleJSONSubmit.bind(this);
        this.handleChosenTemplate = this.handleChosenTemplate.bind(this);
    }

    handleSubmit(formElement) {
        this.props.handleSubmit(formElement);
    }

    handleJSONSubmit(json) {
        this.props.handleJSONSubmit(json);
    }

    handleChosenTemplate(template) {
        this.props.handleChosenTemplate(template);
    }

    render() {
        return (
            <div className="control-panel">
                <FormConstructor handleSubmit={this.handleSubmit} />
                <FormTemplate renderChosenTemplate={this.handleChosenTemplate} />
                <FormConfig
                    handleJSONSubmit={this.handleJSONSubmit}
                    isJSONInvalid={this.props.isJSONInvalid}
                />
            </div>
        );
    }
}

ControlPanel.propTypes = {
    handleSubmit: React.PropTypes.func,
    handleJSONSubmit: React.PropTypes.func,
    isJSONInvalid: React.PropTypes.bool,
    handleChosenTemplate: React.PropTypes.func
};