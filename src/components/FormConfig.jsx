import React, { Component } from 'react';
import ExampleJSON from './ExampleJSON.jsx';

export default class FormConfig extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExampleVisible: false
        };

        this.toggleExample = this.toggleExample.bind(this);
    }

    toggleExample(event) {
        this.setState({isExampleVisible: !this.state.isExampleVisible});
    }

    render() {
        return (
            <form className="config">
                <h3>Paste JSON config here, to auto-generate form</h3>
                <button onClick={this.toggleExample}>JSON format example</button>

                <ExampleJSON />

                <textarea placeholder="Paste your JSON here" className="config__textarea"></textarea>

                <div className="config__submit-wrapper">
                    <input type="submit" value="Submit JSON" className="config__submit" />
                </div>
            </form>
        );
    }
}