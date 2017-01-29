import React, { Component } from 'react';

import login from '../form-templates/login.json';
import feedback from '../form-templates/feedback.json';

export default class FormTemplate extends Component {
    constructor(props) {
        super(props);

        this.renderChosenTemplate = this.renderChosenTemplate.bind(this);
    }

    renderChosenTemplate(index) {
        //this.props.renderChosenTemplate(index);
    }

    render() {

        const templateArray = [
            {
                name: 'Login',
                data: login
            },
            {
                name: 'Feedback',
                data: feedback
            }
        ];

        const renderTemplates = templateArray.map((template, index) => {
            return (
                <div className="template__item" key={index} onClick={this.renderChosenTemplate.bind(this, index)}>
                    <div className="template__image"></div>
                    <span>{template.name}</span>
                </div>
            );
        });


        return (
            <div className="template">
                {renderTemplates}
            </div>
        );
    }
}