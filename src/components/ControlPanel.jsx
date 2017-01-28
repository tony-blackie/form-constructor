import React, { Component } from 'react';

import FormTemplate from './FormTemplate.jsx';
import FormConstructor from './FormConstructor.jsx';
import FormConfig from './FormConfig.jsx';

export default class ControlPanel extends Component {
    render() {
        return (
            <div>
                <FormTemplate />
                <FormConstructor />
                <FormConfig />
            </div>
        );
    }
}