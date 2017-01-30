import React, { Component } from 'react';
import ExampleJSON from './ExampleJSON.jsx';

export default class FormConfig extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExampleVisible: false,
            textareaValue: ''
        };

        this.toggleExample = this.toggleExample.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleJSONSubmit = this.handleJSONSubmit.bind(this);
    }

    toggleExample(event) {
        this.setState((previousState) =>
        {
            return {
                isExampleVisible: !previousState.isExampleVisible
            }
        });
    }

    handleTextareaChange(event) {
        this.setState({textareaValue: event.target.value});
    }

    handleJSONSubmit() {
        if (this.state.textareaValue === '' ) {
            return;
        }
        this.props.handleJSONSubmit(this.state.textareaValue);
    }

    render() {
        return (
            <form className="config">
                <h3 className="config__header">Paste JSON config here, to auto-generate form</h3>

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

                {
                    this.props.isJSONInvalid ?
                    <div className="config__error">
                        There seems to be a problem with your JSON. Check out the example!
                    </div>
                    : null
                }



                <textarea
                    placeholder="Paste your JSON here"
                    className="config__textarea"
                    onChange={this.handleTextareaChange}>
                </textarea>

                <div className="config__submit-wrapper">
                    <input
                        type="submit"
                        value="Submit JSON"
                        className="config__submit"
                        onClick={this.handleJSONSubmit}
                    />
                </div>
            </form>
        );
    }
}

FormConfig.propTypes = {
    handleJSONSubmit: React.PropTypes.func,
    isJSONInvalid: React.PropTypes.bool
};