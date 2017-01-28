import React, { Component } from 'react';

export default class FormConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formInputType: 'label'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        this.props.handleClick()
    }

    handleChange(event) {
        this.setState({formInputType: event.target.value})
    }

    render() {
        return (
            <div className="constructor">
                <div className="constructor__component">
                    <label>Please, input the text you want to be inside the element</label>

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="label">Label</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="text">Text input</option>
                    </select>

                    <button onClick={this.handleClick}>Add text input</button>
                </div>
            </div>
        );
    }
}