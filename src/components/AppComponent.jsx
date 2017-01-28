import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';
import ControlPanel from './ControlPanel.jsx';
import Display from './Display.jsx';


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

    render() {
        return (
            <div>
                <ControlPanel />
                <Display />
            </div>
        );
    }
}