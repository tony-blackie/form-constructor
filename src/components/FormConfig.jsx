import React, { Component } from 'react';
import ExampleJSON from './ExampleJSON.jsx';

export default class FormConfig extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExampleVisible: false
        };

        this.toggleExample = this.toggleExample.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    toggleExample(event) {
        this.setState({isExampleVisible: !this.state.isExampleVisible});
    }

    handleTextareaChange() {

    }

    render() {
        return (
            <form className="config">
                <h3>Paste JSON config here, to auto-generate form</h3>

                <div className="config__example-wrapper">
                    <button
                        className="config__example-button"
                        onClick={this.toggleExample}
                        >
                        Show JSON example
                    </button>
                </div>

                {
                    this.state.isExampleVisible ?
                    <ExampleJSON />
                    : null
                }



                <textarea
                    placeholder="Paste your JSON here"
                    className="config__textarea"
                    onChange={this.handleTextareaChange}>
                </textarea>

                <div className="config__submit-wrapper">
                    <input type="submit" value="Submit JSON" className="config__submit" />
                </div>
            </form>
        );
    }
}