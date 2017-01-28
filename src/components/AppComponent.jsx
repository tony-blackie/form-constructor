import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';
import ControlPanel from './ControlPanel.jsx';
import Display from './Display.jsx';
import styles from '../sass/index.scss';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formElements: [],
            nextState: {
                formElements: []
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formElement) {
        let currentFormElements = this.state.formElements;

        currentFormElements.push(
            {
                type: formElement.elementType,
                value: formElement.value
            }
        );

        this.setState(
            {
                formElements: currentFormElements,
                ...this.state
            }
        );
    }

    render() {
        return (
            <div>
                <ControlPanel handleSubmit={this.handleSubmit}/>
                <Display formElements={this.state.formElements} />
            </div>
        );
    }
}