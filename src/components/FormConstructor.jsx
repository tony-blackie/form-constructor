import React, { Component } from 'react';

export default class FormConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            elementType: 'label',
            value: '',
            isErrorShown: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(event) {
        if (this.state.value === '') {
            this.setState({isErrorShown: true});
            return;
        } else {
            this.setState({isErrorShown: false});
        }
        this.props.handleSubmit(this.state);
        event.preventDefault();
    }

    handleSelectChange(event) {
        this.setState({elementType: event.target.value})
    }

    handleTextChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div className="constructor">
                <h3>Form Constructor</h3>
                <div className="constructor__component">
                    <label>Please, input the text you want to be inside the element</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Text goes here"
                            onChange={this.handleTextChange}
                            className="constructor__input"
                        />
                    </div>
                </div>
                <div className="constructor__component">
                    <label>Select the type of a form element</label>

                    <select
                        value={this.state.elementType}
                        onChange={this.handleSelectChange}
                        className="constructor__select"
                    >
                        <option value="label">Label</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="text">Text input</option>
                    </select>
                </div>
                <div className="constructor__submit-wrapper">
                    <button
                        onClick={this.handleSubmit}
                        className="constructor__submit"
                    >
                        Add {this.state.elementType}
                    </button>
                </div>
                {
                    this.state.isErrorShown ?
                        <div className="constructor__error">
                            Input field for the form element should not be empty
                        </div>
                        : null
                }
            </div>
        );
    }
}