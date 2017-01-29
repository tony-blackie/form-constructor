import React, { Component } from 'react';

import login from '../form-templates/login.json';
import feedback from '../form-templates/feedback.json';

export default class FormTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            templateArray: [
                {
                    name: 'Login',
                    data: login
                },
                {
                    name: 'Feedback',
                    data: feedback
                }
            ]
        };

        this.renderChosenTemplate = this.renderChosenTemplate.bind(this);
    }

    renderChosenTemplate(index) {
        this.props.renderChosenTemplate(this.state.templateArray[index]);
    }

    render() {

        const renderTemplates = this.state.templateArray.map((template, index) => {
            return (
                <div
                    className="template__item"
                    key={index}
                    onClick={this.renderChosenTemplate.bind(this, index)}
                >
                    <button className="template__submit">{template.name}</button>
                </div>
            );
        });


        return (
            <div className="template">
                <h3 className="template__header">Templates</h3>
                <p>Create your form in a blink of an eye</p>

                {renderTemplates}
            </div>
        );
    }
}