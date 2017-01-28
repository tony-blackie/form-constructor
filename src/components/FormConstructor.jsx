import React, { Component } from 'react';

export default class FormConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formInputType: 'label',
            textInputValue: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleClick(event) {
        //this.props.handleClick(this.state);
    }

    handleSelectChange(event) {
        this.setState({formInputType: event.target.value})
    }

    handleTextChange(event) {
        this.setState({textInputValue: event.target.value})
    }

    render() {
        return (
            <div className="constructor">
                <div className="constructor__component">
                    <label>Please, input the text you want to be inside the element</label>
                    <input type="text" placeholder="Text goes here" onChange={this.handleTextChange} />
                </div>
                <div className="constructor__component">
                    <label>Select the type of a form element</label>
                    <select value={this.state.value} onChange={this.handleSelectChange}>
                        <option value="label" defaultValue>Label</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="text">Text input</option>
                    </select>
                </div>
                <div className="constructor__component">
                    <button onClick={this.handleClick}>Add text input</button>
                </div>
            </div>
        );
    }
}