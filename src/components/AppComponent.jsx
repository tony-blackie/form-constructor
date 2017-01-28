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

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(formElement) {
        console.log(formElement.elementType);
        console.log(formElement.value);
    }

    render() {
        return (
            <div>
                <ControlPanel handleSubmit={this.handleSubmit}/>
                <Display />
            </div>
        );
    }
}